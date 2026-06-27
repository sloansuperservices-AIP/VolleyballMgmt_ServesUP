#!/bin/bash
# ---------------------------------------------------------------
# Mid TN Volleyball -- Club Management Platform
# Jules Environment Setup Script
# ---------------------------------------------------------------

set -e

echo ""
echo "[MID TN VBC] Setting up environment..."
echo ""

# -- Node version check -----------------------------------------
echo "[1/4] Checking Node.js..."
node -v || { echo "ERROR: Node.js not found. Please install Node >= 18"; exit 1; }
npm -v

# -- Install dependencies if any package.json exists ------------
echo ""
echo "[2/4] Checking for package.json files in modules..."

for dir in hub dibs tryouts tournaments volley strategic-objectives; do
  if [ -f "/app/$dir/package.json" ]; then
    echo "  Installing dependencies in /$dir..."
    cd /app/$dir && npm install
    cd /app
  else
    echo "  /$dir: no package.json (static or not yet scaffolded)"
  fi
done

# -- Root package.json ------------------------------------------
if [ -f "/app/package.json" ]; then
  echo ""
  echo "[3/4] Installing root dependencies..."
  cd /app && npm install
else
  echo ""
  echo "[3/4] No root package.json found, skipping."
fi

# -- Verify key files exist -------------------------------------
echo ""
echo "[4/4] Verifying core files..."

FILES=(
  "/app/hub/index.html"
  "/app/agents.md"
  "/app/README.md"
)

for f in "${FILES[@]}"; do
  if [ -f "$f" ]; then
    echo "  OK: $f"
  else
    echo "  MISSING: $f"
  fi
done

# -- Done -------------------------------------------------------
echo ""
echo "---------------------------------------------------------------"
echo "Setup complete. Mid TN VBC Platform is ready."
echo ""
echo "  Hub dashboard : /app/hub/index.html"
echo "  DIBS module   : /app/dibs/"
echo "  Tryouts       : /app/tryouts/"
echo "  Design ref    : hub/index.html (canonical styling)"
echo "---------------------------------------------------------------"
echo ""
