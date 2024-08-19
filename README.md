# Node.js, Express API, and MongoDB E-Commerce Application

## Project Description

This project is a Node.js, Express API, and MongoDB e-commerce application, containerized using Docker and orchestrated using Kubernetes on Google Kubernetes Engine (GKE). Each component of the application is encapsulated in separate Docker containers, which are then managed and scaled using Kubernetes. This setup ensures isolated environments for the backend API, frontend client, and MongoDB database, simplifying dependency management, enhancing scalability, and ensuring consistent development and production environments.

## Requirements

Make sure you have the following installed:

- Node.js
- npm
- MongoDB (and start the MongoDB service with `sudo service mongod start`)
- Docker
- Docker Compose
- Ansible (for automated provisioning)
- Google Cloud SDK
- Kubectl (for Kubernetes command-line interactions)

## Installation and Running Locally

### Navigate to the Client Folder

cd client
npm install
npm start
### Navigate to the Backend Folder

Open a new terminal and run the following commands:

cd ../backend
npm install
npm start

### Running with Docker
### Build and Run Containers
### Make sure Docker is running on your machine:

sudo systemctl status docker
### Navigate to the root directory of the project where the docker-compose.yml file is located:

cd <yolo>

### Build and start the Docker containers:

docker compose up --build

### Stopping Containers
### To stop the running Docker containers, use the following command in the root directory:

docker compose down

### Kubernetes and GKE Configuration
### Setting Up Google Cloud SDK
### Install Google Cloud SDK:
### Follow the instructions on the Google Cloud SDK installation guide to install the SDK.

### Initialize Google Cloud SDK:
### Run the following command and follow the prompts to authenticate and configure your Google Cloud SDK:

gcloud init

### Enable the Kubernetes API:

gcloud services enable container.googleapis.com

### Create a GKE Cluster:
### Run the following command to create a GKE cluster named yolo with 3 nodes in the us-central1-a zone:

gcloud container clusters create yolo --zone us-central1-a --num-nodes=3

### Authenticate with the Cluster:
### Configure kubectl to use the credentials for the yolo cluster:

gcloud container clusters get-credentials yolo --zone us-central1-a

### Verify Connection:
### Run kubectl get nodes to verify that you can communicate with the cluster and see its nodes.

kubectl get nodes

### Deploy Applications to the Cluster
### Define your Kubernetes deployment and service in YAML files. 

kubectl apply -f deployment.yml

### Access Your Application:
### If you’ve exposed your application via a LoadBalancer, you can get the external IP address using:

kubectl get services

## Playbook Execution Order

### Role: mongodb

- **Function**: Installs and configures MongoDB.
- **Positioning**: First to ensure MongoDB is available before deploying other components.
- **Modules Used**:
  - `ansible.builtin.apt`: Install MongoDB.
  - `ansible.builtin.systemd`: Manage MongoDB service.

### Role: backend

- **Function**: Installs and configures the backend application.
- **Positioning**: After MongoDB to connect to the database.
- **Modules Used**:
  - `ansible.builtin.apt`: Install Node.js.
  - `ansible.builtin.command`: Run `npm install`.
  - `ansible.builtin.systemd`: Manage backend service.

### Role: frontend

- **Function**: Installs and configures the frontend application.
- **Positioning**: After backend to interact with backend services.
- **Modules Used**:
  - `ansible.builtin.apt`: Install Node.js.
  - `ansible.builtin.command`: Run `npm install`.
  - `ansible.builtin.systemd`: Manage frontend service.

### Role: nginx

- **Function**: Configures Nginx as a load balancer.
- **Positioning**: Last to route traffic to running services.
- **Modules Used**:
  - `ansible.builtin.apt`: Install Nginx.
  - `ansible.builtin.template`: Deploy Nginx configuration.
  - `ansible.builtin.systemd`: Manage Nginx service.

## Docker Hub Repository

- **Docker Hub Username**: `james2004`
- **Tag Version**: `24.7.19`
