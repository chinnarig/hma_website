#!/bin/bash

# =============================================================================
# HeyMello Website - PRODUCTION Environment Deployment
# =============================================================================
# Deploys to PRODUCTION GCP project
# Database: Same as Dev/UAT (35.232.108.201)
# =============================================================================

set -e  # Exit on any error

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# =============================================================================
# PRODUCTION Configuration
# =============================================================================

PROJECT_ID="heymello-ai"           # PRODUCTION GCP Project
SERVICE_NAME="heymello-frontend"   # Cloud Run service name
REGION="us-central1"             # GCP region
DB_HOST="35.232.108.201"         # Shared database host
DB_PORT="5432"
DB_NAME="website"

# =============================================================================
# Deployment
# =============================================================================

echo -e "${RED}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${RED}║        HeyMello Website - PRODUCTION Deployment              ║${NC}"
echo -e "${RED}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

echo -e "${BLUE}📋 Configuration:${NC}"
echo "  Environment: PRODUCTION"
echo "  Project:     $PROJECT_ID"
echo "  Service:     $SERVICE_NAME"
echo "  Region:      $REGION"
echo "  Database:    $DB_HOST:$DB_PORT/$DB_NAME"
echo ""

# Get database password
echo -e "${BLUE}🔐 Database Configuration:${NC}"
read -s -p "Enter PostgreSQL password: " DB_PASSWORD
echo ""

# Construct DATABASE_URL with SSL but no certificate verification
DATABASE_URL="postgresql://postgres:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=require"

# Strong confirmation for production
echo -e "${RED}⚠️  WARNING: You are about to deploy to PRODUCTION!${NC}"
echo ""
read -p "$(echo -e ${YELLOW}Type 'DEPLOY' to confirm PRODUCTION deployment:${NC} )" CONFIRM

if [ "$CONFIRM" != "DEPLOY" ]; then
    echo -e "${RED}❌ Deployment cancelled${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}⏳ Waiting 5 seconds... Press Ctrl+C to cancel${NC}"
sleep 5

# Set GCP project
echo ""
echo -e "${BLUE}🔧 Setting GCP project...${NC}"
gcloud config set project "$PROJECT_ID" --quiet

# Enable required APIs
echo -e "${BLUE}⚙️  Enabling required APIs...${NC}"
gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  containerregistry.googleapis.com \
  --quiet

# Build and deploy
echo ""
echo -e "${BLUE}🏗️  Building and deploying (this may take 3-5 minutes)...${NC}"
gcloud builds submit \
  --config=cloudbuild.yaml \
  --substitutions=_REGION="$REGION",_SERVICE_NAME="$SERVICE_NAME",_DATABASE_URL="$DATABASE_URL" \
  . \
  --quiet

# Get service URL
echo ""
echo -e "${BLUE}🔍 Fetching service URL...${NC}"
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" \
  --region="$REGION" \
  --format="value(status.url)" 2>/dev/null || echo "")

# Display results
echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║        ✅ PRODUCTION Deployment Successful!                ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

if [ -n "$SERVICE_URL" ]; then
  echo -e "${GREEN}🌐 Application URL:${NC}"
  echo "   $SERVICE_URL"
  echo ""
  echo -e "${BLUE}📱 Quick Links:${NC}"
  echo "  • Logs:    https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME/logs?project=$PROJECT_ID"
  echo "  • Metrics: https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME/metrics?project=$PROJECT_ID"
  echo ""
  echo -e "${BLUE}📊 Stream logs:${NC}"
  echo "  gcloud logs tail \"resource.labels.service_name=$SERVICE_NAME\" --format=json"
else
  echo -e "${RED}⚠️  Could not retrieve service URL${NC}"
  echo "Check status: gcloud run services list --region=$REGION"
  exit 1
fi

echo ""
echo -e "${GREEN}✅ Database is already configured during deployment!${NC}"
echo "   No need to run setup-env.sh separately."
echo ""
echo -e "${RED}⚠️  IMPORTANT - Production Checklist:${NC}"
echo "  ☐ Test all critical user flows: $SERVICE_URL"
echo "  ☐ Submit test forms to verify database connection"
echo "  ☐ Monitor error rates in Cloud Console"
echo "  ☐ Test from different browsers/devices"
echo "  ☐ Verify analytics and form submissions"
echo ""
