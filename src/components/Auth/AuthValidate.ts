import { IsEmail, IsNumber, IsString } from "class-validator";

export class OtpValidate {
  @IsString()
  code: Number;

  @IsNumber()
  phoneNumber:Number;
}
