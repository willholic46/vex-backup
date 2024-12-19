import { Injectable } from '@nestjs/common'

@Injectable()
export class ServidorService {
    getAll() {
        return [
            {
                nome: 'Murilo Paiva',
                siape: '123',
                campus: {
                    nome: 'IFRO - Campus Ji-Paraná'
                }
            },
            {
                nome: 'WillHolic',
                siape: '456',
                campus: {
                    nome: 'IFRO - Campus Ji-Paraná'
                }
            },
            {
                nome: 'The big victory',
                siape: '789',
                campus: {
                    nome: 'IFRO - Campus Ji-Paraná'
                }
            }
    ]
    }
}