const express = require("express");
const router = express.Router();

// import validators
const {
    categoryCreateValidator,
    categoryUpdateValidator,
} = require("../validators/category");

// controllers
const {
    requireSignin,
    authMiddleware,
    adminMiddleware,
} = require("../controllers/auth");

const { runValidation } = require("../validators");
const {
    create,
    list,
    read,
    update,
    remove,
} = require("../controllers/category");

// routes
router.post(
    "/category",
    categoryCreateValidator,
    runValidation,
    requireSignin,
    adminMiddleware,
    create
);
router.get("/categories", list);
router.post("/category/:slug", read);
router.put(
    "/category/:slug",
    categoryUpdateValidator,
    runValidation,
    requireSignin,
    adminMiddleware,
    create
);
router.get("/category/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
