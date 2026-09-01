const express = require("express");
const router = express.Router();

const { listUsers, createUser, getUserById, updateUser, deleteUser } = require("../controllers/userscontrol");
const validateUser = require("../middlewares/validateUser");

router.get("/", listUsers);
router.get("/:id", getUserById);
router.post("/", validateUser, createUser);
router.put("/:id", validateUser, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;