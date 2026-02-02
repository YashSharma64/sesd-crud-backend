# SESD CRUD Backend Assignment

A clean, robust, and industry-standard REST API backend built with **Node.js, Express, and TypeScript**. This project demonstrates adherence to **OOP (Object-Oriented Programming)** principles and a layered architecture.

## 🚀 Features

- **CRUD Operations**: Complete Create, Read, Update, Delete for Students.
- **Advanced Search**: Filter by Name (regex search) and Department.
- **Dynamic Sorting**: Sort by any field (e.g., `createdAt`, `name`) in ascending or descending order.
- **Pagination**: Efficient server-side pagination.
- **Layered Architecture**: Strict separation of concerns (Controller → Service → Repository).
- **Type Safety**: Built with TypeScript for robustness.
- **Global Error Handling**: Centralized middleware for clean error responses.

## 🏗️ Architecture (OOP)

The project follows the **Controller-Service-Repository** pattern to ensure clean, maintainable, and testable code.

### 1. **Controller Layer** (`src/controllers`)
- **Role**: Handles HTTP Requests and Responses.
- **OOP Usage**: Implemented as classes (e.g., `StudentController`).
- **Logic**: Parses input, calls the Service layer, and sends JSON responses. Use dependency injection for services.

### 2. **Service Layer** (`src/services`)
- **Role**: Business Logic & Validation.
- **OOP Usage**: Implemented as classes (e.g., `StudentService`).
- **Logic**: Validates business rules (e.g., "Student email must be unique"), handles complex operations, and calls the Repository layer.

### 3. **Repository Layer** (`src/repositories`)
- **Role**: Data Access.
- **OOP Usage**: Implemented as classes (e.g., `StudentRepository`).
- **Logic**: Directly interacts with the Database (MongoDB/Mongoose). No business logic here.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (with Mongoose)
- **Tools**: `ts-node-dev` (Development), `dotenv` (Environment Config)

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local or Atlas Connection String)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/sesd-crud-backend.git
    cd sesd-crud-backend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Create a `.env` file in the root directory:
    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/sesd-crud
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:5000`.

---

## 📡 API Endpoints

### Students

| Method | Endpoint | Description | Query Params |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/students` | Create a new student | - |
| `GET` | `/api/students` | Get all students | `page`, `limit`, `search`, `sortBy`, `order`, `department` |
| `GET` | `/api/students/:id` | Get student by ID | - |
| `PUT` | `/api/students/:id` | Update student details | - |
| `DELETE` | `/api/students/:id` | Delete a student | - |

#### Example: Get Students with Sorting & Filtering
```
GET /api/students?page=1&limit=5&search=John&department=CS&sortBy=name&order=asc
```

---

## 📂 Folder Structure

```
src/
 ├── controllers/    # Request Handling (Classes)
 ├── services/       # Business Logic (Classes)
 ├── repositories/   # DB Access (Classes)
 ├── models/         # Database Models (Interfaces/Schema)
 ├── routes/         # API Routes and Binding
 ├── middlewares/    # Custom Middlewares (ErrorHandler)
 ├── config/         # Configuration (DB Connection)
 ├── app.ts          # Express App Initialization
server.ts            # Server Entry Point
```
