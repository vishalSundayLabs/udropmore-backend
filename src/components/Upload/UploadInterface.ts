import { ResponseSuccessOptions } from "../../utils/ResponseClass";
export default interface MulterFile {
  key: string; // Available using `S3`.
  path: string; // Available using `DiskStorage`.
  mimetype: string;
  originalname: string;
  size: number;
  location: string;
}

export interface UploadSuccessOptions extends ResponseSuccessOptions {
  location: string;
}
export interface UploadMultipleSuccessOptions extends ResponseSuccessOptions {
  location: string[];
}
