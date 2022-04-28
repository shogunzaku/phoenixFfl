const { Player } = require('../models');

const Playerdata = [
  {
    user_name: 'Don_gothands',
    email: 'don@don.com',
    password: 'phx12345',
    team_id: 1,
    postion: 'wr'
   
  },
  {
    user_name: 'Alex.30',
    email: 'alex@alex30.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    user_name: 'Taylor_gotspeed',
    email: 'taylor@taylor.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    user_name: 'Paul_enforcer',
    email: 'paul@paul.com',
    password: 'phx12345',
    team_id: 1,
  
   
  },
  {
    user_name: 'Ant_thelockdown',
    email: 'ant@antonio.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    user_name: 'Blossoming Apricot',
    email: 'LedyX',
    password: 'March 30, 2018',
    team_id: 1,
    postion: ''
   
  },
  {
    user_name: 'Blossoming Apricot',
    email: 'LedyX',
    password: 'March 30, 2018',
    team_id: 1,
    postion: ''
   
  },
  {
    user_name: 'killer_james',
    email: 'james@james.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    user_name: 'k-watts',
    email: 'kyle-watts@kyle.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    user_name: 'the2nonlybRell',
    email: 'rell@rell.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    user_name: '_slickRick',
    email: 'ricardo@rick.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    user_name: 'super_nikki',
    email: 'nikki@nikki.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
  {
    user_name: 'hiflying_Latoya',
    email: 'LadyX@toya.com',
    password: 'phx12345',
    team_id: 1,
    
   
  },
];

const seedPlayers = () => Player.bulkCreate(Playerdata);

module.exports = seedPlayers;
