// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Usuario } from './users.entity';
@Injectable()
export class UsersService {
  async getAll() {
    return await Usuario.find();
  }

  async create(data: any) {
    const user = Usuario.create({ ...data });
    return await user.save();
  }

  async findOne(id: number) {
    return await Usuario.findOne({ where: { id } });
  }
}
