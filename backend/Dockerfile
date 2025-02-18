# Use Node.js version 22
FROM node:22

# Set the working directory
WORKDIR /backend

# Copy package files from
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the backend source code into the container
COPY . .

# Expose the backend port
EXPOSE 4000

# Start the Node.js app
CMD ["node", "backend.js"]
