# To Do List App

## Overview
The To Do List App is a task management application built with **Next.js 14**. This app allows users to effectively manage their tasks using CRUD (Create, Read, Update, Delete) operations, leveraging the power of MongoDB for data storage.

## Features

- **Add Task:** Create a new task with a title and description.
- **Display Tasks:** Read and display all tasks with their details from the database.
- **Update Task:** Change a task's design and update its status from "Pending" to "Completed" by clicking the "Done" button.
- **Delete Task:** Remove a task by clicking the "Delete" button.

## Technologies Used

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB
- **ORM:** Mongoose
- **HTTP Client:** Axios
- **Notifications:** React-Toastify
  
## Project Setup
1- Clone the repository:
```
git clone https://github.com/HebaHamdan2/ToDoList-App.git
cd ToDoList-App
```
2- Install dependencies:
```
npm install
```
3- Set up your MongoDB connection:
- Create a .env.local file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
```
4- Run the development server:
```
npm run dev
```
5- Open your browser and navigate to **http://localhost:3000**.

## Learning Experience

During the development of this application, I learned how to handle routing in Next.js to connect the API with my application effectively. I applied CRUD operations by utilizing Next.js's file-based routing system, which helped prevent confusion. By following the structure of Next.js folders, I could easily organize my code and manage API routes.

I also relied heavily on the Next.js Documentation, which provided clear guidelines on routing and API integration, enabling me to build a robust application with minimal issues.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.
