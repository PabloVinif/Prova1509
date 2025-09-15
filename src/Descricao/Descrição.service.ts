import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DescricaoService } from '../Descricao/descricao.service';

@Injectable()
export class DescricaoService {
  constructor(
    private DescricaoService: DescricaoService,
  ) {}

  async verifyUser(user: string, pwd: string): Promise<any> {
    const descricao = this.DescricaoService.getAll().find((acct) => acct.user === user);
    if (descricao && descricao.password === pwd) {
      const { password, ...details } = descricao;
      return details;
    }
    return null;
  }

  async signin(descricao: any) {
    const tokenPayload = { id: comodo.id, role: comodo.role };
  }
}
