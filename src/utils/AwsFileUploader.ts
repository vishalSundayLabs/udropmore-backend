import * as Aws from "aws-sdk";
import * as multer from "multer";
import * as path from "path";
import * as multerS3 from "multer-s3";
import config from "../config/Config";

Aws.config.update({
  secretAccessKey: config.SECRETACCESSKEY,
  accessKeyId: config.ACCESSKEYID,
  region: config.REGION
});

export const s3 = new Aws.S3();

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.BUCKETNAME,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: async function (req, file, cb) {
      await cb(undefined, { fieldName: file.fieldname });
    },
    key: async function (req, file, cb) {
      await cb(
        undefined,
        `${Date.now().toString()}${path.extname(file.originalname)}`
      );
    },
  }),
});
