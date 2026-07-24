# Content Management System

A full-stack Content Management System (CMS) built with the MERN stack. The project provides a secure content management platform and a dynamic public website powered by REST APIs instead of hardcoded data.

## Overview

This project follows a decoupled architecture where content is managed through a dedicated CMS and consumed by a separate public frontend. It was built as Version 1 of a scalable CMS and is designed to support future enhancements such as block-based content, media management, and richer content types.

## Features

- Administrator authentication
- Content CRUD operations
- Publish and draft workflow
- Dynamic public content
- Dashboard overview
- Category management
- Responsive user interface
- REST API integration

## Architecture

```
content-management-system/

├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
├── admin-frontend/
│   ├── src/
│   └── package.json
│
├── public-frontend/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

## Technology Stack

### Frontend

- React
- Vite
- Webpack
- Tailwind CSS
- Axios
- React Router

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt

### Deployment

- Vercel
- Render
- MongoDB Atlas
- GitHub

## Project Architecture

```
               Public Frontend
                      │
                      ▼
                REST API Layer
                      │
                      ▼
              Express.js Backend
                      │
                      ▼
                 MongoDB Atlas
                      ▲
                      │
               Admin Frontend
```

## Current Scope

Version 1 includes:

- Authentication
- Content management
- Dynamic frontend integration
- REST APIs
- Production deployment

## Future Improvements

- Block-based content editor
- Media uploads
- Rich text enhancements
- Mathematical equation rendering
- Search and filtering
- Docker support
- Role-based permissions

## Security

Sensitive configuration such as environment variables, database credentials, and deployment secrets are intentionally excluded from this repository.

## License

Developed as part of a Full Stack Engineering assignment.
