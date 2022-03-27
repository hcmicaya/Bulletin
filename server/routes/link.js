const express = require("express");
const router = express.Router();

// import validators
const {
    linkCreateValidator,
    linkUpdateValidator,
} = require("../validators/link");
const { runValidation } = require("../validators");

// controllers
const { requireSignin, authMiddleware } = require("../controllers/auth");

const {
    create,
    list,
    read,
    update,
    remove,
    clickCount,
} = require("../controllers/link");

// routes
router.post(
    "/link",
    linkCreateValidator,
    runValidation,
    requireSignin,
    authMiddleware,
    create
);
router.get("/links", list);
router.put("/click-count", clickCount);
router.get("/links", read);
router.put(
    "/link/:slug",
    linkUpdateValidator,
    runValidation,
    requireSignin,
    authMiddleware,
    create
);
router.get("/link/:slug", requireSignin, authMiddleware, remove);

module.exports = router;
