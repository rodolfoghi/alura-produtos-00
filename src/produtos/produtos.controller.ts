import { Controller, Get } from '@nestjs/common';
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
}
