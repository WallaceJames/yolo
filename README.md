# Node.js, Express API, and MongoDB E-Commerce Application

## Project Description

This project is a Node.js, Express API, and MongoDB e-commerce application, containerized using Docker. By employing Docker, I have encapsulated each component of the application into separate containers, facilitating isolated environments for the backend API, frontend client, and MongoDB database. Each container operates as an independent microservice, connected through a dedicated Docker Bridge network named Wallace. This approach simplifies dependency management, enhances scalability, and ensures consistent development and production environments. Docker Compose orchestrates the containers, allowing for straightforward build and deployment processes.

## Requirements

Make sure that you have the following installed:

- Node.js
- npm
- MongoDB (and start the MongoDB service with `sudo service mongod start`)
- Docker
- Docker Compose
- Ansible (for automated provisioning)

## Installation and Running Locally

### Navigate to the Client Folder

```bash
cd client
npm install
npm start

### Navigate to the Backend Folder

### Open a new terminal and run the following commands:
cd ../backend
npm install
npm start


# Running with Docker
## Build and Run Containers
### Make sure Docker is running on your machine:

sudo systemctl status docker

### Navigate to the root directory of the project where the docker-compose.yml file is located:

cd <root directory>


### Build and start the Docker containers:

docker compose up --build

# Stopping Containers
### To stop the running Docker containers, use the following command in the root directory:

docker compose down

## Accessing the Application
### The backend service will be accessible at http://localhost:5000.
### The frontend service will be accessible at http://localhost:3000.

## Ansible Configuration

### Playbook Execution Order

#### Role: mongodb

- **Function**: Installs and configures MongoDB.
- **Positioning**: First to ensure MongoDB is available before deploying other components.
- **Modules Used**:
  - `ansible.builtin.apt`: Install MongoDB.
  - `ansible.builtin.systemd`: Manage MongoDB service.

#### Role: backend

- **Function**: Installs and configures the backend application.
- **Positioning**: After MongoDB to connect to the database.
- **Modules Used**:
  - `ansible.builtin.apt`: Install Node.js.
  - `ansible.builtin.command`: Run `npm install`.
  - `ansible.builtin.systemd`: Manage backend service.

#### Role: frontend

- **Function**: Installs and configures the frontend application.
- **Positioning**: After backend to interact with backend services.
- **Modules Used**:
  - `ansible.builtin.apt`: Install Node.js.
  - `ansible.builtin.command`: Run `npm install`.
  - `ansible.builtin.systemd`: Manage frontend service.

#### Role: nginx

- **Function**: Configures Nginx as a load balancer .
- **Positioning**: Last to route traffic to running services.
- **Modules Used**:
  - `ansible.builtin.apt`: Install Nginx.
  - `ansible.builtin.template`: Deploy Nginx configuration.
  - `ansible.builtin.systemd`: Manage Nginx service.

## Docker Hub Repository

- **Docker Hub Username**: `james2004`
- **Tag Version**: `24.7.19`



