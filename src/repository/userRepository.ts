import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { BcryptService } from 'src/user/bcrypt.service';
import { UserDto, UserResponseDto } from 'src/user/dto/userDTO';

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService,
  ) {}

  async createUser(data: UserDto): Promise<UserResponseDto> {
    const hashedPassword = await this.bcrypt.hashPassword(data.password);
    data.password = hashedPassword;
    return await this.prisma.users.create({
      data,
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        password: false,
        tasks: true,
      },
    });
  }

  async authUser(email: string, password: string): Promise<Users | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await this.bcrypt.comparePasswd(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  async listUsers(): Promise<Users[]> {
    return await this.prisma.users.findMany();
  }

  async findUserByEmail(email: string): Promise<Users | null> {
    return await this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }
}
