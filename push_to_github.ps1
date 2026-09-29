Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "       MahaPravah - Push Whole Project to GitHub" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path $PSScriptRoot

Write-Host "[1/3] Staging all files and changes..." -ForegroundColor Yellow
git add -A

Write-Host "`n[2/3] Checking for changes to commit..." -ForegroundColor Yellow
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "Update MahaPravah project files"
} else {
    Write-Host "No new changes to commit." -ForegroundColor Gray
}

Write-Host "`n[3/3] Pushing to GitHub (origin main)..." -ForegroundColor Yellow
git branch -M main
git remote set-url origin https://github.com/Kuldipgodase07/MahaPravah.git
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================================" -ForegroundColor Green
    Write-Host "   SUCCESS: Project pushed successfully to GitHub!" -ForegroundColor Green
    Write-Host "   Repository: https://github.com/Kuldipgodase07/MahaPravah" -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Green
} else {
    Write-Host "`n========================================================" -ForegroundColor Red
    Write-Host "   ERROR: Git push was not successful." -ForegroundColor Red
    Write-Host "   Please ensure you are authenticated with GitHub." -ForegroundColor Red
    Write-Host "========================================================" -ForegroundColor Red
}

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
