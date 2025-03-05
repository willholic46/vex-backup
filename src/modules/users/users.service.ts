// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Usuario } from './users.entity';
@Injectable()
export class UsersService {
  async getAll() {
    return await Usuario.find();
  }

  async create(data: any) {
    let user = Usuario.create({ ...data });

    user.data_criacao = new Date();

    return await user.save();
  }

  async findOne(id: number) {
    return await Usuario.findOne({ where: { id } });
  }
}
