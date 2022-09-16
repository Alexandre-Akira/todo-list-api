const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://zjbrupao:aVGn2M4nZO574DmbnhS9TmEedm3aMHBc@kesavan.db.elephantsql.com/zjbrupao');

// const User = sequelize.define("user", {
//   id: {
//     type: Sequelize.UUID,
//     defaultValue: Sequelize.UUIDV4,
//     primaryKey: true
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }  
// },{
//   // Other model options go here 
//   sequelize, // We need to pass the connection instance
//   modelName: 'User', // We need to choose the model name
//   tableName: 'users'
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
//   const teste = User.build({ name: "Jao", email: 'jao@gmail', password: 'jao1234'})
//   await teste.save()
// })();


class UserModel {
  static async createNewUser(name, email, password) {
    // Code here
    const newUser = User.create({ name, email, password})    
    await newUser.save()
    
   
  }  
}
 
module.exports = { UserModel }








