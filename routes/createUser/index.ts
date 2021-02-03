const router = require('express').Router();

import createUser from '../../controllers/createUser';

router.post('/createUser', createUser);


export default router;