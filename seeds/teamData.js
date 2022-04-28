const { Team } = require('../models');

const Teamdata = [
  {
    name: 'Lake Pythons',
    team_color: 'Black and Green',
    record: '4-0',
  },
  {
    name: 'The Rockets',
    team_color: 'Gold and Red',
    record: '2-2',
  },
  {
    name: 'The Tigers',
    team_color: 'September 23, 2021 08:30:00',
    record: '1-3',
  },
  {
    name: 'Hurricanes',
    team_color: 'December 22, 2020 11:00:00',
    record: '0-4',
  },
];

const seedTeam = () => Team.bulkCreate(Teamdata);

module.exports = seedTeam;
