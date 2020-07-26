/**
 * UploadImageController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {
  add: function(req, res) {
    try {
      console.log(req)
      res.json({success: true})
    } catch (e) {
      res.json({success: false})
    }
  },
};
