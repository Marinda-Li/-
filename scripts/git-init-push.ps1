# 初始化 Git 仓库并推送到 GitHub（需已安装 Git，并已配置 SSH 或 HTTPS 凭据）
# 用法：
#   .\scripts\git-init-push.ps1 -RemoteUrl "git@github.com:用户名/仓库名.git"
#   .\scripts\git-init-push.ps1 -RemoteUrl "https://github.com/用户名/仓库名.git"

param(
  [Parameter(Mandatory = $true)]
  [string] $RemoteUrl
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot

function Get-GitExe {
  $cmd = Get-Command git -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }
  $candidates = @(
    "${env:ProgramFiles}\Git\cmd\git.exe",
    "${env:ProgramFiles}\Git\bin\git.exe",
    "${env:LocalAppData}\Programs\Git\cmd\git.exe"
  )
  foreach ($p in $candidates) {
    if (Test-Path $p) { return $p }
  }
  return $null
}

$git = Get-GitExe
if (-not $git) {
  Write-Error @"
未找到 Git。请先安装并重新打开终端：
  winget install --id Git.Git -e --source winget
或从 https://git-scm.com/download/win 下载安装。
"@
}

Set-Location $repoRoot
Write-Host "仓库目录: $repoRoot" -ForegroundColor Cyan
Write-Host "使用 Git: $git" -ForegroundColor DarkGray

if (-not (Test-Path (Join-Path $repoRoot ".git"))) {
  & $git init
} else {
  Write-Host "已存在 .git，跳过 git init" -ForegroundColor Yellow
}

& $git add -A
& $git diff --cached --quiet
# 有暂存变更时 diff --quiet 返回 1
if ($LASTEXITCODE -eq 1) {
  & $git commit -m "chore: initial commit"
} else {
  Write-Host "暂存区无变更，跳过提交。" -ForegroundColor Yellow
}

& $git branch -M main 2>$null

$remotes = & $git remote
if ($remotes -match "\borigin\b") {
  & $git remote set-url origin $RemoteUrl
  Write-Host "已更新 remote origin" -ForegroundColor Yellow
} else {
  & $git remote add origin $RemoteUrl
}

Write-Host "正在推送到 origin main …" -ForegroundColor Cyan
& $git push -u origin main

Write-Host "完成。" -ForegroundColor Green
