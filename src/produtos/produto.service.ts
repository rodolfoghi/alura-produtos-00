import { Injectable } from '@nestjs/common';
import { Produto } from 'src/produtos/produto.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectModel(Produto)
    private produtoModel: typeof Produto,
  ) { }

  async buscaTodos(): Promise<Produto[]> {
    return this.produtoModel.findAll();
  }

  async buscaUm(id: number): Promise<Produto> {
    return this.produtoModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const produto = await this.buscaUm(id);
    await produto.destroy();
  }

  async cria(produto: Produto): Promise<Produto> {
    return this.produtoModel.create(produto);
  }

  async atualiza(id: number, produto: Produto): Promise<void> {
    this.produtoModel.update(produto, {
      where: {
        id: id
      }
    });
  }
}
