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

## Install the dependencies:

```bash
npm install

## Run the application in Vite:

```bash
npm run dev
