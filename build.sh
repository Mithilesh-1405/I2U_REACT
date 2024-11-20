#!/bin/bash

# Ensure correct Node.js version
echo "Node version:"
node --version

# Install dependencies
npm install

# Create production build
npm run build
