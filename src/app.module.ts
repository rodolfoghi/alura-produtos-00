import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produto } from './produtos/produto.model';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutoService } from './produtos/produto.service';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'alura',
      password: 'admin123',
      database: 'alura_produtos',
      models: [Produto],
    }),
    SequelizeModule.forFeature([Produto]),
  ],
  controllers: [ProdutosController],
  providers: [ProdutoService],
})
export class AppModule {}
