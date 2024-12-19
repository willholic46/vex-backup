import { Controller, Get, Post, Render } from "@nestjs/common";
import { ServidorService } from "./servidor.service";

@Controller('servidores')
export class ServidorController {

    constructor (private readonly service: ServidorService) {}

    @Get()
    @Render('servidor/index')
    index () {
        return{servidores: this.service.getAll()};
    }
}