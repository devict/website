#!/bin/bash
set -e

# Check logged in as correct account
if ! npx wrangler whoami 2>&1 | grep -q "accounts@devict.org"; then
  echo "Error: Not logged in as accounts@devict.org"
  echo "Run: npx wrangler login"
  exit 1
fi

npm run build
npx wrangler pages deploy _site --project-name=devict-website
