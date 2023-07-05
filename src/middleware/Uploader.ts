const cloudinary = require('cloudinary').v2;
const { cloudinaryConnecton } = require('../config/cloudinaryKey');

export const uploader = async (req, res, next) => {

  if (req.files) {
    try {
      if (req.files.homePageImageUrl) {
        await cloudinary.uploader.upload(
          req.files.homePageImageUrl.tempFilePath,
          async (error, result) => {
            req.body.homePageImageUrl = result.secure_url;
            console.log(
              "line 11",
              req.files.homePageImageUrl.tempFilePath,
              result.secure_url
            );
          }
        );
      }
      if (req.files.productPageImageUrl) {
        await cloudinary.uploader.upload(
          req.files.productPageImageUrl.tempFilePath,
          async (error, result) => {
            req.body.productPageImageUrl = result.secure_url;
            console.log(
              "line 21",
              req.files.productPageImageUrl.tempFilePath,
              result.secure_url
            );
          }
        );
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).send({
        message: "Internal server error! Image Not Upload.",
      });
    }
  }
  next()
};
