import { IsEmail, IsString } from "class-validator";

export class OtpValidate {
  @IsString()
  code: Number;

  @IsEmail()
  email: string;
}
