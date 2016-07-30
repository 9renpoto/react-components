#!/bin/bash
set -e
npm run build
cd styleguide
git config user.email "9renpoto@gmail.com"
git config user.name "Travis-CI"
git init
git add .
git commit -m "[ci skip] Deploy to GitHub Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/9renpoto/style.git" master:gh-pages > /dev/null 2>&1
