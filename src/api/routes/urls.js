const Express = require('express');
const router = Express.Router();
const shortid = require('shortid');
const Url = require('../models/Url');
const utils = require('../utils/utils');
require('dotenv/config');


router.post('/short', async (req, res) => {
    const { origUrl } = req.body;
    const base = process.env.BASE;
});