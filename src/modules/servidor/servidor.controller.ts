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

    // Insert
    @Get('novo')
    @Render('servidor/form')
    createForm() {
        return{};
    }

    @Post('novo')
    createSave() {
        return{};
    }

    // UPDATE
    @Get(':id/atuaizacao')
    @Render('servidor/form')
    UpdateForm() {
        return{};
    }

    // DELETE

}