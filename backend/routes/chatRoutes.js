const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  accessChat,
  fetchChats,
  renameGroup,
  createGroupChat,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

// protect = its a middleware if the user is not logedin they cannot access this oute

const router = express.Router();

// router.route("/").post(protect, accessChat);

router.post("/", protect, accessChat);

// Functionally, both lines do exactly the same thing: they set up a GET route for the root path ("/") that uses the protect middleware and the fetchChats controller function.
//The main advantage of the second approach becomes apparent when you need to define multiple HTTP methods for the same path.

// 1.router.get("/", protect,fetchChats);
router.route("/").get(protect, fetchChats); // 2

router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
