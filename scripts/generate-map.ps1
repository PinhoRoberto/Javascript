$entries = Get-ChildItem -Name | Where-Object { $_ -ne '.git' }
$lines = foreach ($e in $entries) {
  $name = $e.TrimEnd('/')
  $simp = $name -replace '^\d+[_-]*','' -replace '_',' ' -replace '-',' '
  $simpNoExt = $simp -replace '\.[^\.]+$',''
  $key = ($simpNoExt.ToLower() -replace '\W+','')
  $pretty = ($simpNoExt -replace '([a-z])([A-Z])','$1 $2' -replace '_',' ' -replace '-',' ').ToLower()
  "$key`t$pretty"
}
$lines | Out-File commit-name-map.txt -Encoding UTF8
Get-Content commit-name-map.txt | Write-Output