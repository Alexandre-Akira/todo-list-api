import { Options } from 'sequelize/types'

export const dbConfig: Options = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'colocar o nome do usuario',
  password: 'password do banco',
  database: 'nome da database',
  define: {
    timestamps: true, // gera o campo createdAt e updatedAt que contem data e hora
    underscored: true // define o nome das tabelas e nome das colunas como snake case
  }
}
