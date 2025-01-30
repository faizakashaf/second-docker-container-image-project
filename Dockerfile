# lightweight Node.js image
FROM node:alpine

# Setting  working directory inside the container
WORKDIR /apps

# Copy only package.json and package-lock.json (for caching npm install)
COPY package.json package-lock.json ./

#Install Dependencies
RUN npm install 

# Copy the rest of the application files
COPY . .

# Expose the required port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]