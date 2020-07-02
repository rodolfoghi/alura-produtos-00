import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Produto extends Model<Produto> {
    @Column
    codigo: string;

    @Column
    nome: string;

    @Column
    preco: number;
}