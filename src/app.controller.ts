import { Controller, Get, Render, Res } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  @Render('home')
  redirect(@Res() res) {
    return res.redirect('/users');
  }

  @Get('/cadastrar_usuario')
  @Render('cadastrar_usuarios/cd_usuario')
  cadastrar_usuario() {
    return {};
  }

  @Get('/about')
  @Render('about')
  about() {
    return {};
  }
}
