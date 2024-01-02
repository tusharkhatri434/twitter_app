const express = require("express");
const router = express.Router();
const {create} = require('../../controllers/tweet-controller');

router.post("/tweet",create);

module.exports = router;
