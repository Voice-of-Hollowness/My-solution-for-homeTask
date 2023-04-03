# iOnePage

- [Web page link](https://voice-of-hollowness.github.io/My-solution-for-homeTask/)

## Tools

- [Docusaurus](https://docusaurus.io/docs#fast-track)
> Our core Engine that turns our idea into web page

- [Marpit](https://marpit.marp.app/)
> Whatever shit Yuriy use to make those f*cking slide showes

- [Github Pages]()
> Our webPageHost 


## Idea
My simple web page with simple web page

1. PitchDeck of Web Page of idea
2. Pitch Deck as web page
3. Carousel you will it on you're own
4. Github on how to make your own web page **MD**
5. Some instruciotion on how to make pitchDeck
6. Youtube video embeded into web page.


## Build logoic 

The build logic could be found in **build.ps1**	

```powershell
rm docs
cd sources
npm run build
mv build ..\docs
cd ..
git add .
git commit -m "Update on build $(get-date)"
git push
```
