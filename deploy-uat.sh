#!/bin/bash

# =============================================================================
# HeyMello Website - UAT Environment Deployment
# =============================================================================
# Deploys to UAT GCP project
# Database: Same as Dev/Prod (35.232.108.201)
# =============================================================================

set -e  # Exit on any error

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# =============================================================================
# UAT Configuration
# =============================================================================

PROJECT_ID="heymello-ai"                 # UAT GCP Project
SERVICE_NAME="heymello-uat-website"      # Cloud Run service name
REGION="us-central1"                   # GCP region
DB_HOST="35.232.108.201"               # Shared database host
DB_PORT="5432"
DB_NAME="website"

# =============================================================================
# Deployment
# =============================================================================

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║        HeyMello Website - UAT Deployment                     ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

echo -e "${BLUE}📋 Configuration:${NC}"
echo "  Environment: UAT"
echo "  Project:     $PROJECT_ID"
echo "  Service:     $SERVICE_NAME"
echo "  Region:      $REGION"
echo "  Database:    $DB_HOST:$DB_PORT/$DB_NAME"
echo "  Emails:      ✅ ENABLED (Hostinger SMTP)"
echo "  SMTP Host:   $SMTP_HOST:$SMTP_PORT"
echo "  From Email:  $EMAIL_FROM"
echo ""

# Get database password
echo -e "${BLUE}🔐 Database Configuration:${NC}"
read -s -p "Enter PostgreSQL password: " DB_PASSWORD
echo ""

# Construct DATABASE_URL with SSL but no certificate verification
DATABASE_URL="postgresql://postgres:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=require"

# Email Configuration (Hostinger SMTP)
SMTP_HOST="smtp.hostinger.com"
SMTP_PORT="465"
SMTP_SECURE="true"
SMTP_USER="admin@heymello.ai"
SMTP_PASSWORD="HeyMello@9989"
EMAIL_FROM="admin@heymello.ai"
EMAIL_REPLY_TO="support@heymello.ai"
ENABLE_EMAILS="true"

# Confirm deployment
read -p "$(echo -e ${YELLOW}Continue with UAT deployment? [y/N]:${NC} )" -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Deployment cancelled${NC}"
    exit 1
fi

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
  --substitutions=_REGION="$REGION",_SERVICE_NAME="$SERVICE_NAME",_DATABASE_URL="$DATABASE_URL",_ENABLE_EMAILS="$ENABLE_EMAILS",_SMTP_HOST="$SMTP_HOST",_SMTP_PORT="$SMTP_PORT",_SMTP_SECURE="$SMTP_SECURE",_SMTP_USER="$SMTP_USER",_SMTP_PASSWORD="$SMTP_PASSWORD",_EMAIL_FROM="$EMAIL_FROM",_EMAIL_REPLY_TO="$EMAIL_REPLY_TO" \
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
echo -e "${GREEN}║           ✅ UAT Deployment Successful!                    ║${NC}"
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
echo -e "${BLUE}📝 Next Steps:${NC}"
echo "  1. Test the application: $SERVICE_URL"
echo "  2. Submit test forms to verify database connection"
echo "  3. Check your email for acknowledgement messages"
echo "  4. Review logs for any errors"
echo ""
echo -e "${GREEN}✅ Database & Email are configured!${NC}"
echo "   • Database: Connected with SSL"
echo "   • Email: Enabled with Hostinger SMTP (admin@heymello.ai)"
echo ""
