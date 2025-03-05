import { IsNotEmpty } from 'class-validator';

export class UsuarioDto {
  @IsNotEmpty({ message: 'O campo Login é obrigatório' })
  login: string;

  @IsNotEmpty({ message: 'O campo Senha é obrigatório' })
  senha: string;
}
