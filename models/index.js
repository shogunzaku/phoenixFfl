const Team = require('./Team');
const Player = require('./Player');

Team.hasMany(Player, {
  foreignKey: 'team_id',
});

Player.belongsTo(Team, {
  foreignKey: 'team_id',
});

module.exports = { Team, Player };
