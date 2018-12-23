/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: (req, res) => {
    res.view('pages/homepage.ejs', {});
  },
  login: (req, res) => {
    res.view('pages/admin_login.ejs', {});
  },

  tygia: (req, res) => {
    res.view('pages/tygia.ejs', {});
  },
};
