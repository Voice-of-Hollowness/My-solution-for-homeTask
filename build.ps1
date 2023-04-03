rm docs
cd sources
npm run build
mv build ..\docs
cd ..
git add .
git commit -m "Update on build $(get-date)"
git push

