#!/bin/bash

# Initialize Git repository
git init

# Create and switch to main branch explicitly
git checkout -b main

# Add all files to Git
git add .

# Make initial commit
git commit -m "Initial commit: MyLocalSearch Cypress automation project with GitHub Actions"

# Instructions for setting up remote repository
echo ""
echo "Git repository initialized with initial commit on branch 'main'."
echo ""
echo "To connect to a remote repository, run the following command:"
echo "  git remote add origin <your-repository-url>"
echo ""
echo "Then push your code to the remote repository:"
echo "  git push -u origin main"
echo ""
echo "Remember to replace <your-repository-url> with your actual repository URL." 