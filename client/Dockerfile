## Stage 1: Build
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./
   
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set NODE_OPTIONS to allow legacy OpenSSL algorithms
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the application
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Copy the build output from the build stage to the Nginx container
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Install additional packages to increase image size (optional)
RUN apk add --no-cache curl vim

# Expose the port the app runs on
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
