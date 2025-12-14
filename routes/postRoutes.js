const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

// Create post
router.post("/", postController.createPost);

// Get all posts
router.get("/", postController.getPosts);

// Get post by id
router.get("/:id", postController.getPostById);

// Delete post
router.delete("/:id", postController.deletePost);

module.exports = router;
