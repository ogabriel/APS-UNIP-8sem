'use strict';

module.exports = (sequelize, DataTypes) => {
  const RecyclingStation = sequelize.define(
    'RecyclingStation',
    {
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
        type: DataTypes.INTEGER,
      },
      metal_kg: {
        type: DataTypes.INTEGER,
      },
      glass_kg: {
        type: DataTypes.INTEGER,
      },
      paper_kg: {
        type: DataTypes.INTEGER,
      },
      electronic_kg: {
        type: DataTypes.INTEGER,
      },
    },
    {
      validate: {
        atLeastOneType: function () {
          if (
            isNaN(this.electronic) &&
            isNaN(this.glass) &&
            isNaN(this.metal) &&
            isNaN(this.paper) &&
            isNaN(this.plastic)
          ) {
            throw new Error('Require at least of type os recycling material');
          }
        },
      },
    }
  );

  RecyclingStation.associate = (models) => {
    RecyclingStation.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return RecyclingStation;
};
