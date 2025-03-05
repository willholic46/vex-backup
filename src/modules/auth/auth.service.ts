// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(login, senha): Promise<any> {
    const user = await this.usersService.findOne(login);

    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }

    return null;
  }
}
