## Project Description

This project is a Node.js, Express API, and MongoDB e-commerce application, containerized using Docker. By employing Docker, I have encapsulated each component of the application into separate containers, facilitating isolated environments for the backend API, frontend client, and MongoDB database. Each container operates as an independent microservice, connected through a dedicated Docker Bridge network named `Wallace`. This approach simplifies dependency management, enhances scalability, and ensures consistent development and production environments. Docker Compose orchestrates the containers, allowing for straightforward build and deployment processes.




## Requirements

Make sure that you have the following installed:

- [Node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)
- npm
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and start the MongoDB service with `sudo service mongod start`
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation and Running Locally

### Navigate to the Client Folder 

```sh
cd client


npm install


npm start


## Navigate to the Backend Folder.
## Open a new terminal and run the following commands:

cd ../backend
npm install
npm start


## Running with Docker
## Build and Run Containers
## Make sure Docker is running on your machine.
   
   sudo systemctl status docker


## Navigate to the root directory of the project where the docker-compose.yml file is located:

cd ~root directory.

## Build and start the Docker containers:
docker compose up --build

## Stopping Containers
## To stop the running Docker containers, use the following command in the root directory

docker compose down


## Accessing the Application

- The backend service will be accessible at [http://localhost:5000](http://localhost:5000).
- The frontend service will be accessible at [http://localhost:3000](http://localhost:3000).

## Ensure that all the above steps are followed correctly to set up and run the project both locally and using Docker.

## Docker Hub Repository

- **Docker Hub Username**: `james2004`
- **Tag Version**: `24.7.19`
