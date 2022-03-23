const express = require("express");
const router = express.Router();
const { addAdmin, login, jwtVerify } = require("../controllers/Admin");

// import {isAdmin} from '../middlewares/isAdmin';
const { isAdmin } = require("../middlewares/isAdmin");

router.post("/addAdmin", addAdmin);
router.post("/login", login);
router.get("/verify", jwtVerify);

module.exports = router;
