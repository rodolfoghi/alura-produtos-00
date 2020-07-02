import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';

@Controller('produtos')
export class ProdutosController {
    constructor(private produtoService: ProdutoService) {}

    @Get()
    async buscaTodos(): Promise<Produto[]> {
        return this.produtoService.buscaTodos();
    }

    @Get(':id')
    async buscaUm(@Param('id') id: number) : Promise<Produto> {
        return this.produtoService.buscaUm(id);
    }

    @Post()
    async cria(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.cria(produto);
    }

    @Put(':id')
    async atualiza(@Param('id') id: number, @Body() produto: Produto) {
        this.produtoService.atualiza(id, produto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        this.produtoService.remove(id);
    }
}
