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

  @Get('/cadastro/servidor')
  @Render('teste')
  cadastro_servidor() {
    return{}
  }

  @Get('/about')
  @Render('about')
  about() {
    return {};
  }
}
