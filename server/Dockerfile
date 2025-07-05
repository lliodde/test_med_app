# Use a current Long-Term Support (LTS) version of Node.js
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the server directory
COPY package*.json ./

# Install dependencies for the server
RUN npm install

# Copy the rest of the server code
COPY . .

# Expose the port your server runs on
EXPOSE 8181

# Command to run your application
CMD ["node", "index.js"]