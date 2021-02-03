const router = require('express').Router();

import apiExample from './apiExample';
import signIn from './signIn';
import sendVerificationCode from './sendVerificationCode';
import listUser from './listUser';
import createUser from './createUser';

router.use(apiExample);

router.use(signIn);

router.use(sendVerificationCode);

router.use(listUser);

router.use(createUser)

export default router;
