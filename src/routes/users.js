const router = require ('express').Router();

const {getUsers,getUser,createUser,updateUser,deleteUser} = require('../controllers/users');



router.get ('/users', getUsers);
router.get ('/users/:user_id', getUser);
router.post ('/users', createUser);
router.patch ('/users', updateUser);
router.delete ('/users', deleteUser);


module.exports = router;