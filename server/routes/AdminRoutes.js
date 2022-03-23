const express = require("express");
const router = express.Router();
const {
  addAdmin,
  login,
  jwtVerify,
  removeAdmin,
} = require("../controllers/Admin");

// import {isAdmin} from '../middlewares/isAdmin';
const { isAdmin } = require("../middlewares/isAdmin");

router.post("/addAdmin", addAdmin);
router.post("/login", login);
router.get("/verify", jwtVerify);
router.post("/removeAdmin", removeAdmin);

module.exports = router;
