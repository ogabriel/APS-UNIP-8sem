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
    plastic_kg: {
      type: DataTypes.FLOAT,
    },
    metal_kg: {
      type: DataTypes.FLOAT,
    },
    glass_kg: {
      type: DataTypes.FLOAT,
    },
    paper_kg: {
      type: DataTypes.FLOAT,
    },
    electronic_kg: {
      type: DataTypes.FLOAT,
    },
  });
  RecyclingStation.associate = function (models) {
    RecyclingStation.belongsTo(models.User);
  };

  return RecyclingStation;
};
