marp --images jpeg pitch-deck.md --jpeg 90 --allow-local-files 
mv 'pitch-deck*.jpg' sources\static\img\ -force

echo("Generated images")
cd sources

git add .
git commit -m "Images updates $(get-date)"
git push

echo("Pushed updated to git images")
cls

npm run start	
