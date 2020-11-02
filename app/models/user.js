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
        bcrypt.hash(plainPassword, 10, (err, hash) => {
          this.setDataValue('password', hash);
        });
      },
    },
  });

  User.associate = function (models) {
    User.hasMany(models.RecyclingStation);
  };

  return User;
};
