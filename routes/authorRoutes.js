const express = require("express");
const router = express.Router();

const authorController = require("../controllers/authorController");

// Create author
router.post("/", authorController.createAuthor);

// Get all authors
router.get("/", authorController.getAuthors);

// Get author by id
router.get("/:id", authorController.getAuthorById);

// Delete author
router.delete("/:id", authorController.deleteAuthor);
router.get("/:id/posts", authorController.getAuthorPosts);
module.exports = router;
