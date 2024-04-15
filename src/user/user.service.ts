import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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
    const userAleadyExists = await this.userRepository.findUserByEmail(
      data.email,
    );
    if (userAleadyExists) {
      throw new BadRequestException('Usuário já cadastrado');
    }
    return this.userRepository.createUser(data);
  }

  async authUser(email: string, password: string): Promise<Users | null> {
    try {
      const user = await this.userRepository.authUser(email, password);
      const data = await this.authService.generateToken(user);
      return data;
    } catch (error) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos');
    }
  }

  async listUsers(): Promise<Users[]> {
    return this.userRepository.listUsers();
  }
}
