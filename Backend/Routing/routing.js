const express = require('express');
const { insertControll, postControll,patchControll } = require('../Controllers/controllers');

const authRouter = express.Router();

authRouter.post('/', insertControll);
authRouter.post('/authentication', postControll);
authRouter.patch('/authentication',patchControll)

module.exports = authRouter;
