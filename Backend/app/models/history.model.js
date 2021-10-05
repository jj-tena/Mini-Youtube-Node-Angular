module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define("history", {
      title: {
        type: Sequelize.STRING
      },
      embedLink: {
        type: Sequelize.STRING
      }
    });
  
    return History;
  };