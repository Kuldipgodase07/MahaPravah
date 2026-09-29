@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo        MahaPravah - Push Whole Project to GitHub
echo ========================================================
echo.

:: Ensure we are in the script's directory
cd /d "%~dp0"

:: Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git is not installed or not in PATH.
    pause
    exit /b 1
)

:: Set remote URL if not configured
set REPO_URL=https://github.com/Kuldipgodase07/MahaPravah.git
git remote get-url origin >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [INFO] Setting remote origin to %REPO_URL%...
    git remote add origin %REPO_URL%
) else (
    git remote set-url origin %REPO_URL%
)

:: Staging all files
echo [1/3] Staging all files and changes...
git add -A

:: Check if there are changes to commit
git status --porcelain | findstr "^" >nul
if %ERRORLEVEL% equ 0 (
    set /p "COMMIT_MSG=Enter commit message (Press Enter for default): "
    if "!COMMIT_MSG!"=="" (
        set "COMMIT_MSG=Update MahaPravah project files [%date% %time%]"
    )
    echo [2/3] Committing changes with message: "!COMMIT_MSG!"...
    git commit -m "!COMMIT_MSG!"
) else (
    echo [2/3] No local uncommitted changes detected.
)

:: Push to GitHub
echo [3/3] Pushing to GitHub (origin main)...
git branch -M main
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo    SUCCESS: Project successfully pushed to GitHub!
    echo    Repository: https://github.com/Kuldipgodase07/MahaPravah
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo    [ERROR] Git push failed. Please check your credentials
    echo    or network connection and try again.
    echo ========================================================
)

echo.
pause
