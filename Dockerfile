FROM node:22-alpine

WORKDIR /app

# Copy package management files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Build the frontend production assets
RUN npm run build

# Install serve to host static production build with SPA routing support
RUN npm install -g serve

EXPOSE 3000

ENV NODE_ENV=production

# Serve the static Astro build from 'dist' on port 3000 (multi-page, not SPA — no -s rewrite)
CMD ["serve", "dist", "-l", "3000"]
