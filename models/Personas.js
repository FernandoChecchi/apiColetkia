const S = require('sequelize').DataTypes

module.exports = (sequelize) => {
  sequelize.define("persona", {
    name: {
        type: S.STRING
    },
    description: {
        type: S.STRING
    },
    image: {
        type: S.TEXT
    }
  });
};