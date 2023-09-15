#STEP 1 BUILD PROJECT
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose a port (replace 3000 with your application's port)
EXPOSE 3000

# Define the command to run your application
CMD ["node", "app.js"]
