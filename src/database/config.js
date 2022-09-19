const { DB } = require('./constants.ts')

const dbConfig = {
  dialect: 'postgres',
  host: DB.HOST,
  username: DB.USER,
  password: DB.PASSWORD,
  database: DB.NAME,
  define: {
    timestamps: true, // gera o campo createdAt e updatedAt que contem data e hora
    underscored: false // define o nome das tabelas e nome das colunas como snake case
  }
}

module.exports = dbConfig
