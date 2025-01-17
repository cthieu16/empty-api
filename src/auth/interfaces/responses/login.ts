import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class LoginResponse {
  @ApiProperty({
    description: 'User Data',
  })
  user: User;

  @ApiProperty({
    description: 'JWT Token',
  })
  token: string;
}
