import { Body, Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @Render('home')
  async index() {
    const users = await this.usersService.getAll().then((users) => {
      return users.map((user) => {
        return {
          ...user,
          data_criacao: user.data_criacao.toLocaleDateString('pt-BR'),
        };
      });
    });

    return {
      users,
    };
  }

  @Get('/create')
  @Render('cadastrar_usuarios/cd_usuario')
  create() {
    return { title: 'Cadastrar Usuário' };
  }

  @Post('/create')
  async createUsuario(@Body() usuario, @Res() res: Response) {
    console.log(usuario);

    await this.usersService
      .create(usuario)
      .then(() => {
        return res.redirect('/users');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
