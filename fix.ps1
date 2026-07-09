$content = Get-Content "messages/en.json" -Raw
$content = $content -replace "Secure Property Investment and Legal Representation in Portugal", "Secure Property Investment & Legal Representation in Portugal"
Set-Content "messages/en.json" -Value $content

Write-Host "en.json done"