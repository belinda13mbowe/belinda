import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'The username of the user' })
  username: string;

  @ApiProperty({ description: 'The email address of the user' })
  email: string;

  @ApiProperty({ description: 'The password of the user' })
  password: string;

  @ApiProperty({ description: 'The phone number of the user' })
  phone: string;

  @ApiProperty({ description: 'The full name of the user' })
  name: string;

  @ApiProperty({ description: 'The role of the user' })
  role: string;
}
