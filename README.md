## Getting Started

To set up and run the project on your local machine, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine. Open a terminal and run:

### 2. Install Dependencies

cd project-directory

npm install

### 3. Start the Server

**Run the Server:** To start the server normally, use:

npm start

**Run with Nodemon:** For development with automatic restarts when code changes are detected, use:

npm run dev

* Nodemon helps streamline development by automatically restarting the server whenever changes are made to the codebase.

**Initialize the Database:** To set up or reset your database, use:

npm run reset-database

This command will:
* Drop existing tables if they exist.
* Create new tables.
* Populate the database with initial data.
