import { Module } from '@nestjs/common';
import { UserController } from './user.controle';
import { UserService } from './user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from 'src/repository/userRepository';
import { AuthService } from './auth.service';
import { PrismaService } from 'prisma/prisma.service';
import { BcryptService } from './bcrypt.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
      }),
    }),
  ],
  providers: [
    PrismaService,
    UserService,
    BcryptService,
    AuthService,
    UserRepository,
  ],
  controllers: [UserController],
})
export class UserModule {}
