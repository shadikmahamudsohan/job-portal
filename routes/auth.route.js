const express = require('express');
const useCollection = require('../controller/user.controller');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.route("/signup").post(useCollection.signup);
router.route("/login").post(useCollection.singIn);
router.route("/me").get(verifyToken, useCollection.getMe);

module.exports = router;