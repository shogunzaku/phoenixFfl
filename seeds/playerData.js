const { Player } = require('../models');

const Playerdata = [
  {
    username: 'Don_gothands',
    email: 'don@don.com',
    password: 'phx12345',
    team_id: 1,
   
   
  },
  {
    username: 'Alex.30',
    email: 'alex@alex30.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    username: 'Taylor_gotspeed',
    email: 'taylor@taylor.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    username: 'Paul_enforcer',
    email: 'paul@paul.com',
    password: 'phx12345',
    team_id: 1,
  
   
  },
  {
    username: 'Ant_thelockdown',
    email: 'ant@antonio.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    username: 'Blossoming Apricot',
    email: 'LedyX',
    password: 'March 30, 2018',
    team_id: 1,
  
   
  },
  {
    username: 'killer_james',
    email: 'james@james.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    username: 'k-watts',
    email: 'kyle-watts@kyle.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    username: 'the2nonlybRell',
    email: 'rell@rell.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    username: '_slickRick',
    email: 'ricardo@rick.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    username: 'super_nikki',
    email: 'nikki@nikki.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    username: 'hiflying_Latoya',
    email: 'LadyX@toya.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
];

const seedPlayers = () => Player.bulkCreate(Playerdata);

module.exports = seedPlayers;
