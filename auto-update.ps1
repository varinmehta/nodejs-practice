# Define the path to your project folder
$projectPath = "D:\nodeJS"

# Create a file system watcher to monitor changes in the project folder
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $projectPath
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $true

# Define the action to take when a change is detected
$action = {
    # Wait for a moment to ensure the file operation is complete
    Start-Sleep -Seconds 1

    # Navigate to the project directory
    Set-Location $using:projectPath

    # Stage changes
    git add .

    # Check if there are any changes to commit
    $status = git status --porcelain
    if (-not [string]::IsNullOrEmpty($status)) {
        # Commit and push changes
        git commit -m "Auto-update on $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        git push origin master # Change 'master' to 'main' if your default branch is 'main'
    }
}

# Register the event handler for file changes
Register-ObjectEvent $watcher 'Changed' -Action $action
Register-ObjectEvent $watcher 'Created' -Action $action
Register-ObjectEvent $watcher 'Deleted' -Action $action
Register-ObjectEvent $watcher 'Renamed' -Action $action

# Start monitoring
$watcher.EnableRaisingEvents = $true

# Keep the script running
Write-Host "Monitoring changes in $projectPath. Press Ctrl+C to stop."
while ($true) { Start-Sleep -Seconds 1 }
