import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
    @Get()
    findAll(): Produto[] {
        return [
            new Produto("LV001", "Livro Inteligência Artificial como serviço", 29.90),
            new Produto("LV002", "Livro Ionic 4", 39.90),
            new Produto("LV003", "Livro Acessibilidade na Web", 49.90),
            new Produto("LV004", "Livro React Native", 19.90),
            new Produto("LV005", "Livro Manual de sobrevivência do novo programador", 29.90),
        ];
    }

    @Get(':id')
    findOne(@Param() params) : Produto {
        console.log(`Buscando o produto de id ${params.id}`);
        let produto: Produto = new Produto("LV001", "Livro Inteligência Artificial como serviço", 29.90);
        produto.id = params.id;
        return produto;
    }

    @Post()
    create(@Body() produto: Produto): Produto {
        console.log(`Criando o produto ${produto.nome}`);
        produto.id = 6;
        return produto;
    }
}
