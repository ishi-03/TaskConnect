# Task Connect - To-Do List Application

[Live Demo](https://task-connect.netlify.app/)

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Features](#features)
- [Challenges & Decisions](#challenges--decisions)

---

## Project Overview
**Task Connect** is a front-end to-do list application built with React. It allows users to manage their tasks efficiently with user authentication (private routes) and CRUD functionality. 

The application handles user registration, login, error handling, and validation. Unregistered users cannot log in, and once logged in, users can create, read, update, and delete tasks. Tasks can also be marked as complete, and each task shows the creation time. The profile page displays user details and login expiration information.

> **Note:** This project is **front-end only**, built using local storage and free APIs. No back-end service is used for handling data persistence or user authentication.

---

## Technologies Used
- **React**: Front-end JavaScript library for building user interfaces.
- **Redux**: State management for handling user data and application state.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JSON**: For managing data.
- **Local Storage**: For storing user information and tasks.
- **Private Routes**: Ensures user authentication and restricts access to certain routes.
- **Free APIs**: For tasks or other public data.

### Optimization
- **Lazy Loading**: Components are loaded dynamically to improve performance.
- **React Hooks**: Used for state and lifecycle management in function components.

---

## Setup and Installation

### Prerequisites
- Ensure you have **Node.js** and **npm** installed on your system.

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-connect.git
   cd task-connect
2. Install the Dependencies:
   ```bash
   npm install
3. Run application using Vite:
   ```bash
   npm run dev

---

## Features:
-**User Authentication**: Users can register and log in. Private routes prevent unauthorized access.

-**Error Handling**: All user inputs are validated with error handling (e.g., incorrect login or missing fields).

-**Task Management**: Users can create, update, delete, and mark tasks as complete.

-**User Profile**: Displays user details, including login expiration.

-**Creation Time**: Tasks display the time they were created.

-**Local Storage**: User data and tasks are stored in the browser’s local storage.

-**Optimization**: Components use **lazy loading** to improve performance.

---

## Challanges & Decisions:

### No Backend Knowledge:
Since this project is front-end only, local storage is used to handle data persistence. The decision was made to keep the scope simple due to the lack of back-end knowledge. In future iterations, a back-end service like Firebase, or a custom server, could be added to manage user authentication and task storage more securely.

### Private Routes:
To secure the application, private routes were implemented to ensure that users cannot access the main task management features without logging in. This restricts unauthorized users and ensures that only authenticated users can create, update, or delete tasks. It was a key decision to enhance user security and the application's integrity.

### Error Handling:
Proper error handling was a crucial consideration. Forms for both registration and login include validation checks to ensure all required fields are filled correctly. If there are any errors (like invalid credentials or missing fields), the user is provided with clear feedback, improving the user experience.

### Optimization:
React’s lazy loading and hooks were used to optimize the performance of the application. Lazy loading allows only the necessary components to be loaded initially, improving page load time. Hooks were leveraged to manage state and lifecycle more effectively within function components.
