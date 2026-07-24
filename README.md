# Content Management System (CMS)

A full-stack MERN-based Content Management System built from scratch to manage and deliver digital content through a separate Admin Dashboard and Public User application.

The project allows admins to create and manage articles, while users can browse published content through a dynamic website powered by REST APIs.

---

# Project Overview

This project is a custom-built CMS application where content management and content consumption are separated.

Admins can manage website content without changing code, and users can access updated articles dynamically through the public platform.

---

# Features

## Admin Dashboard

Admins can:

- Login securely using JWT authentication
- Create new articles
- Edit existing articles
- Delete articles
- Manage draft and published content
- Organize content using categories
- Control content available on the public website


## Public Website

Users can:

- Register and login
- Browse published articles
- View complete article details
- Read dynamically loaded content
- Access content through REST APIs

---

# Custom Feature Added

## Article Sharing System

Built an additional sharing feature to improve user engagement.

Users can share articles directly through:

- LinkedIn
- WhatsApp
- Twitter/X
- Email
- Copy article link

This custom implementation allows users to easily distribute articles across different platforms.

---

# Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Axios
- React Router


## Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcrypt


## Database

- MongoDB Atlas
- Mongoose


## Deployment

- Vercel
- Render
- GitHub

---

# Architecture

```
              Admin Dashboard
                    |
                    |
                    ▼
             Express REST API
                    |
                    |
                    ▼
              MongoDB Atlas
                    ▲
                    |
                    |
             Public Frontend
```

---

# Project Structure

```
content-management-system/

├── admin-frontend/
│
├── public-frontend/
│
├── backend/
│
└── README.md
```

---

# Key Highlights

- Built a complete MERN stack application from scratch
- Designed separate Admin and User platforms
- Implemented JWT authentication
- Developed REST API-based content management
- Created dynamic article publishing workflow
- Added custom article sharing functionality
- Deployed frontend and backend applications

---

# Future Improvements

- Rich text editor
- Media upload
- Search and filtering
- Role-based permissions
- Analytics dashboard
- Docker support

---

# Security

Sensitive information such as environment variables, database credentials, and authentication secrets are not included in this repository.

---

# Author

**Abhishek Pabbathi**

GitHub:
https://github.com/abhishekpabbathi
