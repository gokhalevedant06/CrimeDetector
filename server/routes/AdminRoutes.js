const express = require("express");
const router = express.Router();
const {
  addAdmin,
  login,
  jwtVerify,
  removeAdmin,
  smsHandler
} = require("../controllers/Admin");

// import {isAdmin} from '../middlewares/isAdmin';
const { isAdmin } = require("../middlewares/isAdmin");

router.post("/addAdmin",isAdmin, addAdmin);
router.post("/login", login);
router.get("/verify", jwtVerify);
router.delete("/:id", isAdmin, removeAdmin);
router.post("/sms",isAdmin,smsHandler);

module.exports = router;
