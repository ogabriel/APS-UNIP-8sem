'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(plainPassword) {
        this.setDataValue('password', bcrypt.hashSync(plainPassword, 10));
      },
    },
  });

  User.associate = (models) => {
    User.hasMany(models.RecyclingStation);
  };

  return User;
};
