'use strict';

const { DataTypes } = require("sequelize/types");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', 
    {
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
        encrypted_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    User.beforeCreate(async (user, options) => {
        return bcrypt.hash(user.encrypted_password, 10).then(hash => {
            user.encrypted_password = hash;
        }).catch(err => {
            throw new Error();
        });
      });

    User.associate = function (models) {
        User.hasMany(models.RecyclingStation);
    }

    return User;
}