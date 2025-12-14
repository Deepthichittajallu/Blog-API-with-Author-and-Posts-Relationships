const db = require("../config/db");

// Create a new post
exports.createPost = (req, res) => {
  const { title, content, author_id } = req.body;

  if (!title || !content || !author_id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if author exists
  db.query(
    "SELECT id FROM authors WHERE id = ?",
    [author_id],
    (err, results) => {
      if (results.length === 0) {
        return res.status(400).json({ message: "Author does not exist" });
      }

      const sql =
        "INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)";

      db.query(sql, [title, content, author_id], () => {
        res.status(201).json({ message: "Post created successfully" });
      });
    }
  );
};

// Get all posts with author details
exports.getPosts = (req, res) => {
  const sql = `
    SELECT 
      posts.id,
      posts.title,
      posts.content,
      authors.name,
      authors.email
    FROM posts
    JOIN authors ON posts.author_id = authors.id
  `;

  db.query(sql, (err, results) => {
    res.json(results);
  });
};

// Get post by ID with author details
exports.getPostById = (req, res) => {
  const sql = `
    SELECT 
      posts.id,
      posts.title,
      posts.content,
      authors.name,
      authors.email
    FROM posts
    JOIN authors ON posts.author_id = authors.id
    WHERE posts.id = ?
  `;

  db.query(sql, [req.params.id], (err, results) => {
    if (results.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(results[0]);
  });
};

// Delete post
exports.deletePost = (req, res) => {
  db.query(
    "DELETE FROM posts WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json({ message: "Post deleted successfully" });
    }
  );
};
