#Use Node.js version below
FROM node:22

# Install MariaDB (MySQL-compatible)
RUN apt-get update && \
    apt-get install -y mariadb-server && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /run/mysqld && chown -R mysql:mysql /run/mysqld

#Set the working directory
WORKDIR /backend

#Copy package files from
COPY ./package*.json ./

#Install dependencies
RUN npm install

#Copy the backend source code into the container
COPY . .

#Expose the backend port
EXPOSE 4000 3306

# Start MariaDB and Node.js together
CMD  && node backend.js



