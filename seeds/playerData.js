const { Player } = require('../models');

const Playerdata = [
  {
    id: 0,
    username: 'Don_gothands',
    email: 'don@don.com',
    password: 'phx12345',
    team_id: 1,
   
   
  },
  {
    id:1,
    username: 'Alex.30',
    email: 'alex@alex30.com',
    password: 'phx12345',
    team_id: 2,
    
   
  },
  {
    id:2,
    username: 'Taylor_gotspeed',
    email: 'taylor@taylor.com',
    password: 'phx12345',
    team_id: 3,
    
   
  },
  {
    id:3,
    username: 'Paul_enforcer',
    email: 'paul@paul.com',
    password: 'phx12345',
    team_id: 4,
  
   
  },
  {
    id: 4,
    username: 'Ant_thelockdown',
    email: 'ant@antonio.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    id: 5,
    username: 'Blossoming Apricot',
    email: 'LedyX',
    password: 'March 30, 2018',
    team_id: 2,
  
   
  },
  {
    id: 6,
    username: 'killer_james',
    email: 'james@james.com',
    password: 'phx12345',
    team_id: 3,
    
   
  },
  {
    id: 7,
    username: 'k-watts',
    email: 'kyle-watts@kyle.com',
    password: 'phx12345',
    team_id: 4,
    
   
  },
  {
    id: 8,
    username: 'the2nonlybRell',
    email: 'rell@rell.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    username: '_slickRick',
    email: 'ricardo@rick.com',
    password: 'phx12345',
    team_id: 2,
    
   
  },
  {
    username: 'super_nikki',
    email: 'nikki@nikki.com',
    password: 'phx12345',
    team_id: 3,
    
   
  },
  {
    username: 'hiflying_Latoya',
    email: 'LadyX@toya.com',
    password: 'phx12345',
    team_id: 4,
    
   
  },
];

const seedPlayers = () => Player.bulkCreate(Playerdata);

module.exports = seedPlayers;
