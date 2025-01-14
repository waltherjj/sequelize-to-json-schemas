/**
 * Sequelize model definition for testing User hasOne, Profile belongsTo.
 */

const Sequelize = require('sequelize');

const { DataTypes } = Sequelize;

/**
 * Initialize Profile definition
 *
 * @param sequelize Sequelize Instance
 * @returns {ProfileClass} Returns the Profile model
 */
module.exports = sequelize => {
  const Model = sequelize.define(
    'profile',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      underscored: false,
    },
  );

  return Model;
};
