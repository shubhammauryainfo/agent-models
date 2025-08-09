FROM node:22.18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Run dev server and bind to all interfaces
CMD ["npm", "run", "dev", "--", "--host"]
