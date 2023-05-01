# Use the official node 14 image as the base image
FROM node:14

# install yarn on the container
RUN apt-get update && apt-get install -y curl && \
    curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.19

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files for the app in the root directory
COPY package*.json ./

# Install the app dependencies
RUN yarn install

# Copy the package.json and package-lock.json files for the client to the container
COPY client/package*.json ./client/

# Install the client dependencies
RUN cd client && yarn install

# Copy the package.json and package-lock.json files for the server to the container
COPY server/package*.json ./server/

# Install the server dependencies
RUN cd server && yarn install

# Copy the rest of the client and server code to the container
COPY client ./client
COPY server ./server

# Build the client code
RUN cd client && yarn run build

# Expose port 3000 for the client
EXPOSE 3000

# Start the server
CMD [ "yarn", "run", "start" ]