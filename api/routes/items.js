const express = require('express');
const router = express.Router();
const Items = require('./../controllers/Item');

router.get('/', Items.all);

module.exports = router;
