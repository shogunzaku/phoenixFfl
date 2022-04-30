const { Team } = require('../models');

const Teamdata = [
  {
    team_id: 1,
    team_name: 'Lake Pythons',
    team_color: 'Black and Green',
    wins: 4,
    loses:2,
  },
  {
    team_id:  2,
    team_name: 'The Rockets',
    team_color: 'Gold and Red',
    wins: 9,
    loses:2,
  },
  {
    team_id: 3,
    team_name: 'The Tigers',
    team_color: 'Orange and Black',
    wins: 3,
    loses: 7,
  },
  {
    team_id: 4,
    team_name: 'The Hurricanes',
    team_color: 'Grey and Purple',
    wins: 10,
    loses:1,
  },
];

const seedTeam = () => Team.bulkCreate(Teamdata);

module.exports = seedTeam;
