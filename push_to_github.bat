@echo off
title MahaPravah - Push Project to GitHub

echo ========================================================
echo        MahaPravah - Push Whole Project to GitHub
echo ========================================================
echo Target Repo: https://github.com/Kuldipgodase07/MahaPravah.git
echo Branch     : main
echo ========================================================
echo.

cd /d "%~dp0"

:: 1. Staging all files
echo [1/3] Staging all files and changes...
git add -A

:: 2. Committing changes if any exist
echo.
echo [2/3] Checking for local changes...
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "Update MahaPravah project files"
) else (
    echo No new unstaged changes to commit.
)

:: 3. Set remote origin
git branch -M main
git remote set-url origin https://github.com/Kuldipgodase07/MahaPravah.git

:: 4. Push to GitHub main branch with force (overrides outdated remote history)
echo.
echo [3/3] Pushing to GitHub (origin main)...
git push -u origin main --force

echo.
if errorlevel 1 (
    echo ========================================================
    echo    ERROR: Git push was not successful.
    echo.
    echo    If prompted, please sign in with your GitHub account:
    echo    Username: Kuldipgodase07
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
