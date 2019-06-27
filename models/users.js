const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync();

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'The password field cannot be empty'
          }
        },
        set(password) {
          const encryptedPassword = bcrypt.hashSync(password, salt);
          this.setDataValue('password', encryptedPassword);
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: 'Email exists in db'
        },
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'The email field cannot be empty'
          },
          isEmail: {
            msg: 'Invalid email address'
          }
        }
      }
    },
    {
      indexes: [{ unique: true, fields: ['email'] }]
    }
  );
  return Users;
};
