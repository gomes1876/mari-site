#!/bin/bash

# Build
npm run build

# Clone
git clone https://github.com/<seu_usuario>/<seu_repositorio>.git
cd <seu_repositorio>
git checkout gh-pages

# Update
cp -r ../build/* ./
git add .
git commit -m "Deploy"
git push origin gh-pages
