/**
 * UploadImageController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const fs = require('fs')
const path = require('path')
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
          if (err) return res.serverError(err)
          return res.ok()
        })
      }
    } catch (e) {
      return res.serverError(e)
    }
  },
  get: async function (req, res) {
    try {
      let images = await UploadImage.find({}).sort('createdAt DESC')
      res.json({images})
    } catch (e) {
      return res.serverError(e)
    }
  },
  remove: async function (req, res) {
    try {
      let pathImage = path.join(__dirname, '../../assets/upload-image/' + req.body.filename)
      fs.unlink(pathImage, async function(err) {
        if (err) return res.serverError(err)
        await UploadImage.destroy({filename: req.body.filename})
        return res.ok()
      })
    } catch (e) {
      return res.serverError(e)
    }
  }
};
