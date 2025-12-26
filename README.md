# Blog-API-with-Author-and-Posts-Relationships

A RESTful Blog API built using Node.js, Express.js, and MySQL.
This project demonstrates how to design and manage a one-to-many relationship between authors and posts, enforce database integrity, and efficiently retrieve related data using SQL JOIN queries.

## Features
A backend API that:
- Manages authors and their corresponding blog posts
- Correctly models a one-to-many relationship
- Ensures data integrity using foreign keys and cascade deletes
- Avoids inefficient database access patterns such as the N+1 query problem

## Tech Stack
- Node.js
- Express.js
- MySQL
- mysql2
<!-- <<<<<<< HEAD
- dotenv (for environment variable management) -->

<!-- ======= -->
<!-- - Postman API(for testing)
>>>>>>> 0b7092d3697327a03e53a395e5c4bba69b4ecb89 -->

## Project Structure
```blog-api/
├── server.js
├── schema.sql
├── package.json
├── config/
│ └── db.js
├── controllers/
│ ├── authorController.js
│ └── postController.js
├── routes/
│ ├── authorRoutes.js
│ └── postRoutes.js
└── README.md
```



---

## ⚙️ Setup Instructions

### 1️ Prerequisites

- Node.js (v18 or higher)
- MySQL Server
- Git

---

### 2 Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_LINK>
cd Blog-API-with-Author-and-Posts-Relationships
```


### 3 Install Dependencies : npm install
## Database Schema
- authors(id, name, email)
- posts(id, title, content, author_id)

## API Endpoints

### Authors
- POST /authors
- GET /authors
- GET /authors/:id
- DELETE /authors/:id
- GET /authors/:id/posts

### Posts
- POST /posts
- GET /posts
- GET /posts/:id
- DELETE /posts/:id
- GET /authors/:id/posts

## How to Run
1. Install dependencies: npm install 
2. Start Server : npm server.js
3. Server runs at: http://localhost:3000

### Environment Variables

Create a `.env` file in the project root with the following values:

DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=your_mysql_password  
DB_NAME=blog_db  
PORT=3000
## Notes
- Author must exist before creating a post
- Deleting an author automatically deletes all related posts

