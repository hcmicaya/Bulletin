const express = require("express");
const router = express.Router();

// middlewares
const {
    requireSignin,
    authMiddleware,
    adminMiddleware,
} = require("../controllers/auth");

// import validators
const { read } = require("../controllers/user");

// routes
router.get("/user", requireSignin, authMiddleware, read);
router.get("/admin", requireSignin, adminMiddleware, read);

module.exports = router;
