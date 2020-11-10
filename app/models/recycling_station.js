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
            throw new Error('Require at least one type of recycling material');
          }
        },
      },
    }
  );

  RecyclingStation.associate = (models) => {
    RecyclingStation.belongsTo(models.User, {
      foreignKey: {
        name: 'id',
        allowNull: false,
      },
    });
  };

  return RecyclingStation;
};
