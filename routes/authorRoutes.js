const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const authorController = require("../controllers/authorController");

// Create author
router.post(
  "/",
  body("name").isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
  body("email").isEmail().withMessage("Invalid email format"),
  authorController.createAuthor
);


// Get all authors
router.get("/", authorController.getAuthors);

// Get author by id
router.get("/:id", authorController.getAuthorById);

// Delete author
router.delete("/:id", authorController.deleteAuthor);
router.get("/:id/posts", authorController.getAuthorPosts);
module.exports = router;
