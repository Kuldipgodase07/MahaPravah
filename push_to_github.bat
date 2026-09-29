@echo off
title MahaPravah - Push Project to GitHub

echo ========================================================
echo        MahaPravah - Push Whole Project to GitHub
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/3] Staging all files and changes...
git add -A

echo.
echo [2/3] Creating commit if there are changes...
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "Update MahaPravah project files"
) else (
    echo No new changes to commit.
)

echo.
echo [3/3] Setting remote and pushing to GitHub (origin main)...
git branch -M main
git remote set-url origin https://github.com/Kuldipgodase07/MahaPravah.git
git push -u origin main

echo.
if errorlevel 1 (
    echo ========================================================
    echo    ERROR: Git push was not successful.
    echo.
    echo    If you need to sign in:
    echo    1. Sign in to your GitHub account (Kuldipgodase07).
    echo    2. Or use your GitHub Personal Access Token (PAT).
    echo ========================================================
) else (
    echo ========================================================
    echo    SUCCESS: Project pushed successfully to GitHub!
    echo    Repository: https://github.com/Kuldipgodase07/MahaPravah
    echo ========================================================
)

echo.
echo Press any key to close this window...
pause >nul
