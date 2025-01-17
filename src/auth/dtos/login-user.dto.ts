import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  NotContains,
} from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    description: 'Name',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'Email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(16)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'Password matches',
  })
  @NotContains(' ', { message: 'Not contains' })
  password: string;

  @ApiProperty({
    description: 'Confirm password',
  })
  @IsString()
  passwordconf: string;

  @ApiProperty({
    description: 'Avatar',
  })
  @IsString()
  @IsOptional()
  image: string;
}
