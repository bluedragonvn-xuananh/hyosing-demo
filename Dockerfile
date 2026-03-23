# 1. Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build   # Vite SPA build -> build/client

# 2. Serve stage
FROM nginx:alpine
# Copy đúng folder build client
COPY --from=builder /app/build/client /usr/share/nginx/html

# Config Nginx để React Router / SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]