import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/repository/userRepository';
import { Users } from '@prisma/client';
import { UserDto, UserResponseDto } from './dto/userDTO';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
  ) {}

  async createUser(data: UserDto): Promise<UserResponseDto> {
    return this.userRepository.createUser(data);
  }

  async authUser(email: string, password: string): Promise<Users | null> {
    try {
      const user = await this.userRepository.authUser(email, password);
      const data = await this.authService.generateToken(user);
      return data;
    } catch (error) {
      throw new UnauthorizedException('Erro ao autenticar o usuário');
    }
  }
}
