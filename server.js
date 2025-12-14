const express = require("express");
const app = express();

const db = require("./config/db");
const authorRoutes = require("./routes/authorRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog API running");
});

// routes
app.use("/authors", authorRoutes);
app.use("/posts", postRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
