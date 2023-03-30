import { ResponseSuccess } from "../../utils/ResponseClass";
import {
  UploadMultipleSuccessOptions,
  UploadSuccessOptions,
} from "./UploadInterface";

export class SingleFileResponseSuccess extends ResponseSuccess {
  location: string;
  constructor(options: UploadSuccessOptions) {
    super(options);
    if (options.location) {
      this.location = options.location;
    }
  }
}

export class MultipleFileResponseSuccess extends ResponseSuccess {
  location: string[];
  constructor(options: UploadMultipleSuccessOptions) {
    super(options);
    if (options.location) {
      this.location = options.location;
    }
  }
}
