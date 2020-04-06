'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
	status: {
        type: DataTypes.ENUM,
        values: ['started', 'cancelled', 'done']
    },
    url: DataTypes.STRING,
    fileLocation: DataTypes.STRING
  }, {});
  Job.associate = function (models) {
    // associations can be defined here
  };
  return Job;
};