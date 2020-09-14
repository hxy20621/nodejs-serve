const router = require('express').Router();

import sendVerificationCode from '../../controllers/sendVerificationCode';

router.post('/send-verification-code', sendVerificationCode);


export default router;