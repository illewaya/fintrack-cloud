#!/bin/bash

# Build script for production deployment

echo "🔨 Building FinTrack Cloud..."

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build frontend
echo "🎨 Building frontend..."
pnpm build

# Generate database migrations
echo "🗄️  Generating database migrations..."
pnpm drizzle-kit generate

echo "✅ Build complete!"
echo "🚀 Ready for deployment"
