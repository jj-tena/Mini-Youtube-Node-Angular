module.exports = (sequelize, Sequelize) => {
    const Bookmark = sequelize.define("bookmark", {
      title: {
        type: Sequelize.STRING
      }
    });
    return Bookmark;
  };