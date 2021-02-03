const router = require('express').Router();

import listUser from '../../controllers/listUser';

router.post('/listUser', listUser);


export default router;