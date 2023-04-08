const bcrypt = require('bcrypt');

const User = require('../models/user');

const router = express.Router();

router.get('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});

        if (!user) {
            return res.status(401).json({message: 'Auth failed'});
        }

        const result = await bcrypt.compare(req.body.password, user.password);

        if (!result) {
            return res.status(401).json({message: 'Auth failed'});
        }

        req.session.user = user;

        res.status(200).json({message: 'Auth successful'});

    } catch (err) {
        res.status(500).json({error: err});
    }
});

module.exports = router;