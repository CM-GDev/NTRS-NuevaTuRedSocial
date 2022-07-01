// unpacking router from express.router()
const router = require('express').Router();
// importing ApiRoutes folder
const apiRoutes = require('./api');


// establishing api route
router.use('/api', apiRoutes);

// establishing error route
router.use((req, res) => res.send('Wrong route!'));

// exporting routes
module.exports = router;
