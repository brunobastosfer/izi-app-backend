import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.headers || !request.headers.authorization) {
      throw new UnauthorizedException('No token provided');
    }

    const token = request.headers.authorization.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Invalid token');
    }

    try {
      const decodedToken = await this.authService.validateToken(token);
      request.user = decodedToken;
      return true;
    } catch (error) {
      switch (error.message) {
        case 'TokenExpiredError':
          throw new UnauthorizedException('Token expired');
        case 'JsonWebTokenError':
          throw new UnauthorizedException('Invalid token');
        default:
          throw new UnauthorizedException(error.message);
      }
    }
  }
}
