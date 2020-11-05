'use strict';

module.exports = (sequelize, DataTypes) => {
  const RecyclingStation = sequelize.define('RecyclingStation', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    localization: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: false,
    },
    plastic: {
      type: DataTypes.INTEGER,
    },
    metal: {
      type: DataTypes.INTEGER,
    },
    glass: {
      type: DataTypes.INTEGER,
    },
    paper: {
      type: DataTypes.INTEGER,
    },
    electronic: {
      type: DataTypes.INTEGER,
    },
  });

  RecyclingStation.associate = (models) => {
    RecyclingStation.belongsTo(models.User);
  };

  return RecyclingStation;
};
