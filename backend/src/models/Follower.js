/**
 * 
 */

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Follower", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    followed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    follower: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
