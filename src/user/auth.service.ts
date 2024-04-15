import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly secretKey = process.env.JWT_SECRET;
  async generateToken(user: Users): Promise<any> {
    const accessToken = jwt.sign(
      {
        scope: 'accessToken',
        id: user.id,
      },
      this.secretKey,
      {
        expiresIn: '1h',
      },
    );

    const refreshToken = jwt.sign(
      {
        scope: 'refreshToken',
        id: user.id,
      },
      this.secretKey,
      {
        expiresIn: '8h',
      },
    );

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  async validateToken(token: string): Promise<any> {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      return null;
    }
  }
}
