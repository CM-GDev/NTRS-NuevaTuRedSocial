// unpacking router from express.router()
const router = require('express').Router();
//importing Users and Thoughts routes
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// establishing routes
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

// exporting all routes established
module.exports = router;
