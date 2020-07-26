/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,
  'HomeController': {
    'index': 'admin_login',
    'tygia': 'admin_login',
    'uploadImage': 'admin_login',
  },
  'UploadImageController': {
    'upload': 'admin_login',
    'get': 'admin_login',
    'remove': 'admin_login',
  },
  'admin/find':'admin_login',
  'admin/findOne':'admin_login',
  'admin/create':'admin_login',
  'admin/update':'admin_login',
  'admin/destroy':'admin_login',
  'admin/populate':'admin_login',
  'admin/add':'admin_login',
  'admin/remove':'admin_login',
  'admin/replace':'admin_login',

  //'currency/find':'admin_login',
  'currency/findOne':'admin_login',
  'currency/create':'admin_login',
  'currency/update':'admin_login',
  'currency/destroy':'admin_login',
  'currency/populate':'admin_login',
  'currency/add':'admin_login',
  'currency/remove':'admin_login',
  'currency/replace':'admin_login',

  'uploadImage/find':'admin_login',
  'uploadImage/findOne':'admin_login',
  'uploadImage/create':'admin_login',
  'uploadImage/update':'admin_login',
  'uploadImage/destroy':'admin_login',
  'uploadImage/populate':'admin_login',
  'uploadImage/add':'admin_login',
  'uploadImage/remove':'admin_login',
  'uploadImage/replace':'admin_login',
};
