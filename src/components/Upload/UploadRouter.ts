/**
 * UploadRouter.ts
 */

import { Router } from "express";
import * as path from "path";
import { upload } from "../../helpers/AwsHelper";
import { decodeToken } from "../../helpers/JwtHelper";
import * as uploadController from "./UploadController";

const router = Router();

router.post(
  "/",
  upload.single("file"),
  decodeToken,
  uploadController.uploadSingleFile
);
router.post(
  "/files",
  upload.array("file"),
  decodeToken,
  uploadController.uploadMultiFiles
);

export default router;
