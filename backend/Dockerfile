# Stage 1: Build
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Stage 2: Run
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only necessary files from the build stage
COPY --from=build /usr/src/app /usr/src/app

# Expose the port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
#MULTISTAGE BUILDS.