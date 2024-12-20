import { Injectable } from '@nestjs/common'

@Injectable()
export class ServidorService {
    getAll() {
        return [
            {
                usuario: 'murilo.paiva',
                privilegio: 'Adm',
                ultimo_acesso: '02/12/2024',
                data_cadastro: '02/12/2024'
            },
            {
                usuario: 'willians.nunes',
                privilegio: 'Adm',
                ultimo_acesso: '02/12/2024',
                data_cadastro: '02/12/2024'
            },
            {
                usuario: 'murilo.paiva',
                privilegio: 'Adm',
                ultimo_acesso: '02/12/2024',
                data_cadastro: '02/12/2024'
            }
    ]
    }
}