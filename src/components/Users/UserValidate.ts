/**
 * UserValidate.ts
 */

import {
  IsEmail,
  IsString,
  MinLength,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
} from "class-validator";

export class Create {

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  isActive: boolean


  @IsNotEmpty()
  @IsString()
  userType: string;

  @IsNotEmpty({ message: "phone number should not be empty" })
  phoneNumber: string;

  @IsNotEmpty()
  waId: string;

  @IsNotEmpty()
  waToken: string;

}