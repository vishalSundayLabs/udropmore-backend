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
} from "class-validator";

export class Create {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty({ message: "email should not be empty" })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}

export class PersonalInfo {
  @IsString()
  @MinLength(9)
  ssn: string;

  @IsString()
  @MinLength(10)
  phoneNumber: string;

  @IsString()
  dateOfBirth: string;
}

export class AddressInfo {
  @IsString()
  line1: string;

  @IsString()
  @IsOptional()
  line2: string;

  @IsString()
  city: string;

  @IsString()
  postalCode: string;

  @IsString()
  state: string;
}

export class OptIn {
  @IsMongoId()
  _id: string;
}

export class PasswordReset {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
