/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {
  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  },

  adminLocal: function (req, res) {
    passport.authenticate('admin-local', { successRedirect: '/',failureRedirect: '/', failureFlash: true},function(err, user, info){
      if(err){
        return res.json({message:'error'});
      }
      if(!user){
        return res.json({message:info.message});
      }
      console.log('here')
      req.logIn(user, function(err){
        if (err) {
          return res.json({message:'error'});
        }
        req.session.cookie.maxAge = 3 * 24 * 60 * 60 * 1000; //30 * 24 * 60 * 60 * 1000;
        return res.redirect('/');
      });
    })(req, res);
  },
};
