/**
 * UploadImageController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
let upload = require('multer')()
module.exports = {
  upload: async function (req, res) {
    try {
      let image = await UploadImage.findOne({filename:req.body.filename})
      if(image) {
        throw 'Filename đã tồn tại'
      } else {
        let image = await UploadImage.create({filename:req.body.filename})
        req.file('file').upload({
          dirname: '../../assets/upload-image',
          saveAs: req.body.filename
        },function (err, uploadedFile) {
          if (err) return res.negotiate(err)
          return res.ok()
        })
      }
    } catch (e) {
      return res.negotiate(e)
    }
  },
  get: async function (req, res) {
    try {
      let images = await UploadImage.find({})
      res.json({images})
    } catch (e) {
      return res.negotiate(e)
    }
  }
};
