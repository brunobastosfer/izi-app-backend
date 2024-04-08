import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: 'Email do usuário',
    example: 'johnnydeep@email.com',
  })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: '123456',
  })
  password: string;
}

export class UserResponseDto {
  email: string;
}
