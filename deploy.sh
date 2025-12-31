#!/bin/bash

# Quick GCP Deployment Script for HeyMello UAT
# Pre-configured for heymello-ai project with heymello-uat service

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting HeyMello UAT Deployment...${NC}"

#!/bin/bash
# =============================================================================
# HeyMello Website - GCP Deployment Script
# =============================================================================
# Deploys the Next.js frontend to Google Cloud Run
# 
# Usage:
#   ./deploy.sh                    # Deploy with default settings
#   ./deploy.sh production         # Deploy to production
#   ./deploy.sh staging            # Deploy to staging
#
# Requirements:
#   - gcloud CLI installed and authenticated
#   - Docker installed (for local builds)
#   - Billing enabled on GCP project
# =============================================================================

set -e  # Exit on any error

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# =============================================================================
# Configuration
# =============================================================================

# Default environment
ENVIRONMENT="${1:-uat}"

# Project settings
PROJECT_ID="heymello-ai"
REGION="us-central1"

# Environment-specific settings
case "$ENVIRONMENT" in
  production|prod)
    SERVICE_NAME="heymello-frontend"
    ;;
  staging|stage)
    SERVICE_NAME="heymello-staging"
    ;;
  uat|*)
    SERVICE_NAME="heymello-uat"
    ;;
esac

# =============================================================================
# Deployment
# =============================================================================

echo -e "${BLUE}🚀 Deploying HeyMello Website to $ENVIRONMENT${NC}
"
echo -e "${BLUE}📋 Configuration:${NC}"
echo "  Project:     $PROJECT_ID"
echo "  Service:     $SERVICE_NAME"
echo "  Region:      $REGION"
echo ""

# Confirm deployment
if [ "$ENVIRONMENT" = "production" ]; then
  echo -e "${YELLOW}⚠️  Deploying to PRODUCTION! Press Ctrl+C to cancel...${NC}"
  sleep 3
fi

# Set GCP project
echo -e "${BLUE}🔧 Configuring GCP...${NC}"
gcloud config set project "$PROJECT_ID" --quiet

# Enable required APIs
gcloud services enable 
  cloudbuild.googleapis.com 
  run.googleapis.com 
  containerregistry.googleapis.com 
  --quiet

# Build and deploy
echo -e "${BLUE}🏗️  Building and deploying (this may take 3-5 minutes)...${NC}"
gcloud builds submit \
  --config=cloudbuild.yaml \
  --substitutions=_REGION="$REGION",_SERVICE_NAME="$SERVICE_NAME" \
  . \
  --quiet

# Get service URL
echo -e "${BLUE}🔍 Fetching service URL...${NC}"
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" 
  --region="$REGION" 
  --format="value(status.url)" 2>/dev/null || echo "")

# Display results
echo ""
if [ -n "$SERVICE_URL" ]; then
  echo -e "${GREEN}✅ Deployment Successful!${NC}
"
  echo -e "${GREEN}🌐 Application URL:${NC}"
  echo "   $SERVICE_URL"
  echo ""
  echo "📱 Quick Links:"
  echo "  • Logs:    https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME/logs?project=$PROJECT_ID"
  echo "  • Metrics: https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME/metrics?project=$PROJECT_ID"
  echo ""
  echo "📊 Stream logs:"
  echo "  gcloud logs tail "resource.labels.service_name=$SERVICE_NAME" --format=json"
else
  echo -e "${RED}⚠️  Could not retrieve service URL${NC}"
  echo "Check status: gcloud run services list --region=$REGION"
  exit 1
fi

echo -e "${BLUE}� Configuration:${NC}"
echo "  Project: $PROJECT_ID"
echo "  Service: $SERVICE_NAME"
echo "  Region: $REGION"
echo "  Backend: $BACKEND_URL"
echo ""

# Set the project
echo -e "${BLUE}🔧 Setting GCP project...${NC}"
gcloud config set project "$PROJECT_ID"

# Enable required APIs (silently)
echo -e "${BLUE}⚙️  Ensuring APIs are enabled...${NC}"
gcloud services enable cloudbuild.googleapis.com run.googleapis.com containerregistry.googleapis.com --quiet

# Build and deploy
echo -e "${BLUE}�️  Building and deploying...${NC}"
gcloud builds submit \
    --config=cloudbuild.yaml \
    --substitutions=_REGION="$REGION",_BACKEND_URL="$BACKEND_URL" \
    . \
    --quiet

# Wait for deployment
echo -e "${BLUE}⏳ Waiting for deployment to complete...${NC}"
sleep 10

# Get service URL
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region="$REGION" --format="value(status.url)" 2>/dev/null || echo "")

echo ""
if [ -n "$SERVICE_URL" ]; then
    echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
    echo -e "${GREEN}🌐 Service URL: $SERVICE_URL${NC}"
    echo ""
    echo "📱 Quick Links:"
    echo "  • Application: $SERVICE_URL"
    echo "  • Logs: https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME/logs?project=$PROJECT_ID"
    echo "  • Metrics: https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME/metrics?project=$PROJECT_ID"
else
    echo -e "${RED}⚠️  Could not retrieve service URL. Check deployment status:${NC}"
    echo "  gcloud run services list --region=$REGION"
fi

echo ""
echo -e "${BLUE}📊 View real-time logs:${NC}"
echo "  gcloud logs tail \"resource.type=cloud_run_revision AND resource.labels.service_name=$SERVICE_NAME\""
