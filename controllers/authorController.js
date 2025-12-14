const db = require("../config/db");

// Create a new author
exports.createAuthor = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const sql = "INSERT INTO authors (name, email) VALUES (?, ?)";

  db.query(sql, [name, email], (err, result) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(201).json({
      message: "Author created successfully",
      authorId: result.insertId
    });
  });
};

// Get all authors
exports.getAuthors = (req, res) => {
  db.query("SELECT * FROM authors", (err, results) => {
    res.json(results);
  });
};

// Get author by ID
exports.getAuthorById = (req, res) => {
  const authorId = req.params.id;

  db.query(
    "SELECT * FROM authors WHERE id = ?",
    [authorId],
    (err, results) => {
      if (results.length === 0) {
        return res.status(404).json({ message: "Author not found" });
      }
      res.json(results[0]);
    }
  );
};

// Delete author
exports.deleteAuthor = (req, res) => {
  const authorId = req.params.id;

  db.query(
    "DELETE FROM authors WHERE id = ?",
    [authorId],
    (err, result) => {
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Author not found" });
      }
      res.json({ message: "Author deleted successfully" });
    }
  );
};
