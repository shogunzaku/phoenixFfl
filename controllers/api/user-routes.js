const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbflagfootball = await User.create(
     req.body
    );

    req.session.save(() => {
      req.session.player_id = dbflagfootball.id;
      req.session.logged_in = true;

      res.status(200).json(dbflagfootball);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbflagfootball = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbflagfootball) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbflagfootball.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.player_id = dbflagfootball.id;
      req.session.logged_in = true;
      res.status(200)
      res.json({ user: dbflagfootball, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
