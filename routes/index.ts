const router = require('express').Router();

import apiExample from './apiExample';
import signIn from './signIn';
import sendVerificationCode from './sendVerificationCode';




router.use(apiExample);

router.use(signIn);

router.use(sendVerificationCode);

export default router;