# StudentApplicationFullStack
Full Stack Student Registration Application - React, springBoot, Mysql

# Student Admission Management System

## Description

The Student Admission Management System is a web application that allows users to manage student admissions. It consists of two parts: the frontend, developed using React, and the backend, developed using Spring Boot and connected to a MySQL database.

## Features

- View a list of all students with their names, addresses, mobile numbers, and admission status.
- Add a new student record.
- Update existing student records.
- Delete a student record.

## Technologies Used

### Frontend (React)

- React (Frontend library)
- Axios (HTTP requests)

### Backend (Spring Boot)

- Java (Programming language)
- Spring Boot (Framework)
- MySQL (Database)

## Installation

### Frontend

1. Clone the repository to your local machine.
2. Make sure you have Node.js installed.
3. Navigate to the `frontend` directory.
4. [review to this page and setup required dependencies.](https://tailwindcss.com/docs/guides/vite)
5. Start the development server using `npm run dev`.

### Backend

1. Clone the backend repository to your local machine.
2. Import the project into your preferred Java IDE.
3. Configure the MySQL database connection details in the `application.properties` file.
4. Run the Spring Boot application.

## Backend API Endpoints

The backend Spring Boot application provides the following API endpoints:

- `GET /api/v1/student/getAllStudents`: Get a list of all students.
- `POST /api/v1/student/save`: Create a new student record.
- `PUT /api/v1/student/update`: Update an existing student record.
- `DELETE /api/v1/student/deletestudentid/{id}`: Delete a student record by ID.

## Usage

1. Upon running the frontend application, a list of existing students will be displayed.
2. To add a new student, click the "Save" button and enter the student's name, address, mobile number, and select the admission status (completed or not completed).
3. To update a student's information, click the "Edit" button next to the student's name. Make the necessary changes and click the "Update" button.
4. To delete a student, click the "Delete" button next to the student's name.

## Notes

- The frontend application communicates with the backend API to fetch existing student records and store new student data.
- The backend Spring Boot application is connected to a MySQL database for data storage and retrieval. Make sure to configure the database connection details correctly.
- Ensure that the backend API allows cross-origin requests (CORS) from the frontend URL.
- The `active` property in the student records is sent as a boolean value (`true` or `false`) to the backend API to avoid deserialization errors.

