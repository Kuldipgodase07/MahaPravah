@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo        MahaPravah - Push Whole Project to GitHub
echo ========================================================
echo Target Repo: https://github.com/Kuldipgodase07/MahaPravah.git
echo Branch     : main
echo ========================================================
echo.

:: Ensure we are in the repository directory
cd /d "%~dp0"

:: Check git installation
where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git is not installed or not in your system PATH.
    echo Please install Git from https://git-scm.com/
    echo.
    pause
    exit /b 1
)

:: Ensure remote origin is set
set REPO_URL=https://github.com/Kuldipgodase07/MahaPravah.git
git remote get-url origin >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [INFO] Adding remote origin: %REPO_URL%
    git remote add origin %REPO_URL%
) else (
    git remote set-url origin %REPO_URL%
)

:: 1. Stage all changes
echo [1/3] Staging all files and changes...
git add -A

:: 2. Commit changes if any exist
git diff --cached --quiet
if %ERRORLEVEL% neq 0 (
    echo.
    set /p "COMMIT_MSG=Enter commit message (Press Enter for default): "
    if "!COMMIT_MSG!"=="" (
        set "COMMIT_MSG=Update MahaPravah project files [%date% %time%]"
    )
    echo [2/3] Committing changes: "!COMMIT_MSG!"...
    git commit -m "!COMMIT_MSG!"
) else (
    echo [2/3] Working tree clean (all changes already committed).
)

:: 3. Push to main branch
echo.
echo [3/3] Pushing to GitHub (origin main)...
git branch -M main
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo    SUCCESS: Project successfully pushed to GitHub!
    echo    URL: https://github.com/Kuldipgodase07/MahaPravah
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo  [!] Git push requires authentication.
    echo.
    echo  If a browser window or login popup appeared, please sign
    echo  in with your GitHub account (Kuldipgodase07).
    echo.
    echo  Alternatively, you can authenticate using a Personal
    echo  Access Token (PAT):
    echo  1. Go to: https://github.com/settings/tokens
    echo  2. Generate a token with 'repo' permissions
    echo  3. Run: git push https://<YOUR_TOKEN>@github.com/Kuldipgodase07/MahaPravah.git main
    echo ========================================================
)

echo.
pause
