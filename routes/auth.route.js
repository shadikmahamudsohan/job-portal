const express = require('express');
const useCollection = require('../controller/user.controller');
const router = express.Router();

router.route("/signup").post(useCollection.signup);
router.route("/login").post(useCollection.singIn);

module.exports = router;