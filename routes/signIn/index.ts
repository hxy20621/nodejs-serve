const router = require('express').Router();

import signIn from '../../controllers/signIn';

router.post('/sign-in', signIn);

export default router;
