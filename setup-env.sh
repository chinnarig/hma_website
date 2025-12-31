#!/bin/bash

# =============================================================================
# Setup Database Connection for Cloud Run Services
# =============================================================================
# This script configures DATABASE_URL for each environment
# Usage: ./setup-env.sh [dev|uat|prod] [database-password]
# =============================================================================

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# =============================================================================
# Configuration
# =============================================================================

ENVIRONMENT="${1:-dev}"
DB_PASSWORD="${2}"

# Database configuration
DB_HOST="35.232.108.201"
DB_PORT="5432"
DB_NAME="website"
DB_USER="postgres"

# Environment-specific settings
case "$ENVIRONMENT" in
  dev)
    PROJECT_ID="heymello-ai"
    SERVICE_NAME="heymello-dev-website"
    ;;
  uat)
    PROJECT_ID="heymello-ai"
    SERVICE_NAME="heymello-uat"
    ;;
  prod|production)
    PROJECT_ID="heymello-ai"
    SERVICE_NAME="heymello-frontend"
    ;;
  *)
    echo -e "${RED}❌ Invalid environment: $ENVIRONMENT${NC}"
    echo "Usage: $0 [dev|uat|prod] [database-password]"
    exit 1
    ;;
esac

# =============================================================================
# Main
# =============================================================================

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║        Setup Database Connection - $ENVIRONMENT           ${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check if password is provided
if [ -z "$DB_PASSWORD" ]; then
  echo -e "${YELLOW}Database password not provided${NC}"
  read -s -p "Enter PostgreSQL password: " DB_PASSWORD
  echo ""
fi

# Construct DATABASE_URL
DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=require"

echo -e "${BLUE}📋 Configuration:${NC}"
echo "  Environment: $ENVIRONMENT"
echo "  Project:     $PROJECT_ID"
echo "  Service:     $SERVICE_NAME"
echo "  Database:    $DB_HOST:$DB_PORT/$DB_NAME"
echo ""

# Confirm
read -p "$(echo -e ${YELLOW}Update DATABASE_URL for $SERVICE_NAME? [y/N]:${NC} )" -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Cancelled${NC}"
    exit 1
fi

# Set environment variable
echo ""
echo -e "${BLUE}🔧 Updating Cloud Run service...${NC}"

gcloud run services update "$SERVICE_NAME" \
  --region=us-central1 \
  --project="$PROJECT_ID" \
  --set-env-vars="DATABASE_URL=$DATABASE_URL" \
  --quiet

echo ""
echo -e "${GREEN}✅ Database connection configured successfully!${NC}"
echo ""
echo -e "${BLUE}🔍 Verify the connection:${NC}"
echo "  1. Visit: https://console.cloud.google.com/run/detail/us-central1/$SERVICE_NAME/logs?project=$PROJECT_ID"
echo "  2. Submit a test form on your website"
echo "  3. Check logs for database connection errors"
echo ""

# Get service URL
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" \
  --region=us-central1 \
  --project="$PROJECT_ID" \
  --format="value(status.url)" 2>/dev/null || echo "")

if [ -n "$SERVICE_URL" ]; then
  echo -e "${GREEN}🌐 Service URL:${NC}"
  echo "   $SERVICE_URL"
fi

echo ""
