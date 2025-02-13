import { Controller, Get, Render } from '@nestjs/common';
import { ServidorService } from './app.service';

@Controller()
export class AppController {

  constructor (private readonly service: ServidorService) {}

  @Get('/')
  @Render('home')
  home() {
    return{servidores: this.service.getAll()};
  }

  @Get('/cadastrar_usuario')
  @Render('cadastrar_usuarios')
  cadastrar_usuario() {
    return{}
  }

  @Get('/about')
  @Render('about')
  about() {
    return {};
  }
}
