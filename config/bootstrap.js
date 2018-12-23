/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */
var schedule = require('../api/services/schedule.js');
module.exports.bootstrap = async function(done) {
    // Admin.create({email:'thiendia', password:'bananhduc'}).then(function(admin){
    //   return done();
    // })
  schedule.rateCurrency()
  done();
};
