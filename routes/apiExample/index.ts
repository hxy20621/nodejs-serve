const router = require('express').Router();

import apiExample from '../../controllers/apiExample';

router.post('/example', apiExample);


export default router;