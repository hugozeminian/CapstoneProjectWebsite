# Use an official Node runtime as a parent image
FROM node:17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./react/package*.json ./

# Install app dependencies
RUN npm install --force 

# Copy the rest of the application code to the working directory
COPY ./react .

# Expose port 3000 for the development server
# EXPOSE 3000

# Define the command to run your application
CMD ["npm", "run", "dev"]
