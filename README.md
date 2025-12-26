# Blog API – Authors & Posts

A RESTful API built with Node.js, Express, and MySQL to manage authors and their blog posts.
This project demonstrates handling one-to-many relationships using foreign keys and Joins.

## Features
- Create, read, and delete authors
- Create, read, and delete posts
- One-to-many relationship (Author → Posts)
- Cascade delete: deleting an author deletes their posts
- Efficient queries using JOIN to avois N+1 problem

## Tech Stack
- Node.js
- Express.js
- MySQL
- mysql2
- dotenv (for environment variable management)


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

