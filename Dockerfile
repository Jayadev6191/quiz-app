# Use the official node 14 image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files for the client to the container
COPY client/package*.json ./client/

# Install the client dependencies
RUN cd client && npm install

# Copy the package.json and package-lock.json files for the server to the container
COPY server/package*.json ./server/

# Install the server dependencies
RUN cd server && npm install

# Copy the rest of the client and server code to the container
COPY client ./client
COPY server ./server

# Build the client code
RUN cd client && npm run build

# Expose port 3000 for the client
EXPOSE 3000

# Start the server
CMD [ "npm", "run", "start" ]