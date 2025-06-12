#!/bin/bash
cd /home/kavia/workspace/code-generation/regguide-interactive-faq-38818-a72295e2/regguide_faq
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

