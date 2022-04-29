const router = require('express').Router();
const sequelize = require('../config/connection');
const seedTeams = require('./teamData');
const seedPlayers = require('./playerData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedTeams();

  await seedPlayers();

  process.exit(0);
};

seedAll();
