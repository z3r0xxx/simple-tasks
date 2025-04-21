# Simple Tasks

This project is a simple task management application with both frontend and backend components.

## Project Structure

- `api/`: Backend (API) folder containing the server code for handling tasks.
- `client/`: Frontend folder containing the React application.

## Prerequisites

To run this project locally, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/z3r0xxx/simple-tasks.git
cd simple-tasks
```

### 2. Set up the Backend (API)

Navigate to the api folder and install the backend dependencies:

```bash
cd api
npm install
```

Configure .env file:
```
DB_HOST=1.1.1.1
DB_PORT=5432
DB_USER=root
DB_PASS=root
DB_NAME=dbname
```

After the installation is complete, you can run the backend server:

```bash
npm start
```

This will start the backend on `http://localhost:3000`.

### 3. Set up the Frontend (Client)

Navigate to the `client` folder and install the frontend dependencies:

```bash
cd ../client
npm install
```

Once the installation is complete, you can run the frontend React application:

```bash
npm start
```

This will start the frontend on `http://localhost:5173`.

### 4. Access the Application

- The frontend will be available at `http://localhost:5173`.
- The backend will be available at `http://localhost:3000`.

You can now use the task management application!