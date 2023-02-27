# Tauottaja
## Ohjelman Kuvaus yleisesti
-Tauottajan tarkoitus on toistaa satunnaista musiikkia satunnaisen ajan, jonka jälkeen se odottaa satunnaisen ajan. Tauottaja soittaa merkkiäänen kun on ruokatauon aika. Oletuksena ruokatauko on 11:30, mutta pystytään muttamaan haluamakseen.
## Kehitysympärisstön kuvaus
-Ohjelmassa kielenä käytetään javascriptiä.
-Tarvittavia asennus paketteja on WebStorm, Node.js, discord.js
-Node.js 16.9.0 tai uudempi tarvitaan jotta discord.js toimii.
-Oikeus puhua, lukea tekstiäja liittyä puhe kanavalle.
-Ohjelma tehdään WebStormissa.
-Kehitysympäristön pystytys linux mintille. Lataa JetBrains Toolbox. Pura ladattu paketti ja käynnistä ohjelma sen sisällä. Kun se avautuu valitse listalta WebStorm ja paina install. Seuraavaksi node.js se asennetaan samalla tavalla kuin JetBrains toolbox. Lataa paketti, pura se ja läynnistäohjelma sen sisällä. Tuo github projecti WebStormiin valitse git ja paina clone anna likki github projectiin ja paina clone. Discord.js asennetaan avamalla pääte webstormissa projectin omassa kansiossa ja suorittamalla komennot.```npm init -y ```, ```npm install discord.js```, ```yarn add discord.js```, ```pnpm add discord.js``` ja jos haluat että api avain tai muu herkkä data ei näy.```npm install dotenv --save```
-Github https://github.com/Baanaani/Eemil_botti
## Ohjelmiston pseukoodinpm init -y
-Kun ohjelma käynnistyy se arpoo listan jossa järjestyksessä musiikit toistetaan ja liittyy kanavalle. sen jälkeen se soittaa arvotun pituuden kappaleesta. jonka jälkeen se arpoo kuinka pitkän välin se pitää ennen kuin seuraava alkaa. Kun kello on 11:30 soittaa merkki äänen.
