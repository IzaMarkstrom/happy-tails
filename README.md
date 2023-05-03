# Happy Tails

Welcome to Happy Tails! This web application is designed to help dog rescue organizations manage and showcase dogs available for adoption. It is built using TypeScript, Node.js, React, MongoDB, and can be easily deployed using Docker Compose.

## Features

- User-friendly interface for browsing and searching available dogs for adoption.
- Ability to log in as an administrator to manage dog listings.
- CRUD operations for managing dog information such as name, breed, age, and availability.
- Integration with a MongoDB database to store and retrieve dog data.

## Prerequisites

Make sure you have the following software installed on your machine before running the application:

- Node.js (v12 or higher)
- Npm
- MongoDb
- Docker
- Docker Compose

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/IzaMarkstrom/happy-tails.git
   ```

1. Install dependencies

```bash
cd happy-tails
npm install
```

1. Add an .env file and provide the necessary environment variables (MongoDB connection string, server port)

1. Seed data to the database with the following script:

```bash
mongosh --file initdb.js
```

1. Run the backend with the following command:

```bash
npm start -y -w packages/server
```

1. Run the frontend with the following command:

```bash
npm start -y -w packages/client
```

## Docker Compose

Alternatively, you can use Docker Compose to run the application in a Docker container. Make sure you have Docker and Docker Compose installed.

1. Build the Docker images and start the containers:

```bash
docker-compose up --build
```

1. Access the application:
   Once the containers are up and running, you can access the application in your browser at http://localhost:3000
