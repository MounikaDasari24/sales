# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# RUN apk --no-cache add --virtual builds-deps build-base python
# Install the dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose port 3039 for the server
EXPOSE 3039

# Start the server
CMD [ "npm","run", "build" ]