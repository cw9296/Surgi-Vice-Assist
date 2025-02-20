-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS surgivice_dev;

-- Use the created database
USE surgivice_dev;

-- Create the users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL UNIQUE,  -- Increased size to accommodate modern password hashes
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
