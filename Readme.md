# iOnePage

Привіт! Я дуже дивний iOne я сильно полюлюяю [Гачимучі](https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%87%D0%B8%D0%BC%D1%83%D1%87%D0%B8), Маму і програмування. Але я зандадто ~~тупий~~ неорганізований аби стоврювати сайти самостійно 

- [Web page link](https://voice-of-hollowness.github.io/My-solution-for-homeTask/)


<img src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fvoice-of-hollowness.github.io%2FMy-solution-for-homeTask%2F&chs=180x180&choe=UTF-8&chld=L|2" rel="nofollow" alt="qr code"><a href="www.qr-code-generator.com/" border="0" style="cursor:default" rel="nofollow"></a>

## Tools

- [Docusaurus](https://docusaurus.io/docs#fast-track)
> Our core Engine that turns our idea into web page

- [Marpit](https://marpit.marp.app/)
> Whatever shit Yuriy use to make those f*cking slide showes

- [Github Pages]()
> Our webPageHost 


## Instruciton

> Install docusurus

`npx create-docusaurus@latest my-website classic`

> Install carouse 

`npm install react-responsive-carousel`	


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
