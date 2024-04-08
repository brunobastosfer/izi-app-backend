import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  async hashPassword(passwd: string): Promise<string> {
    return await bcrypt.hash(passwd, 10);
  }

  async comparePasswd(
    passwd: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(passwd, hashedPassword);
  }
}
