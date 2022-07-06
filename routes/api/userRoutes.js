//unpacking router from express.router()
const router = require('express').Router();

//importing controller functions
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require('../../controllers/userController.js');

// creating express routes: /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// creating express routes: /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// creating express route: /api/users/:userId/friends
router.route('/:userId/friends/:friendId')
    .post(createFriend);

// creating express route: /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .delete(deleteFriend);

//Exporting all user routes
module.exports = router;
