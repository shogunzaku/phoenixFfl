const router = require('express').Router();
const { Team, Player } = require('../models');

// GET all teams for homepage
router.get('/', async (req, res) => {
  try {
    const flagfootballdb = await Team.findAll({
      include: [
        {
          model: Player,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const teams = dbflagfootball.map((Team) =>
      Team.get({ plain: true })
    );
    res.render('homepage', {
      teams,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Team
router.get('/Team/:id', async (req, res) => {
  try {
    const dbflagfootball = await Team.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const Team = dbflagfootball.get({ plain: true });
    res.render('Team', { Team, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });
    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
