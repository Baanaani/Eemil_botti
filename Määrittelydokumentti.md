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
## Ohjelmiston pseukoodi

liitä botti jäseneksi serverille.
soittoajan määrityksen ajastin alkaa klo 8.00 ja loppuu 15.00 ihan sama mitä tekee
(/ajastin komento, jolloin ajastin alkaa käydä ja loppuu /lopeta ajastin)
(/alita tauottaja komento, jolloin ajastin alkaa käydä ja loppuu /lopeta tauottaja)
soittoajan määritys 30min-90min 
arpoo monenko minuutin kuluttua musiikki alkaa soida
alkaa soida uudelleen (loop)
soittoaika 15sec-30sec
valitsee musiikin ennalta määritetystö paikasta
ajastin käynnistyy
kun, ajastin on 0 musiikki käynnistyy
seurvaana tauon arvonta alkaa kun musiikki on soitettu
soittoajan pituuden arvonta 15sec-30sec
ajastimen käynnistys
valitsee musiikin soundcloud listalta
musiikissa jäljellä ainakin botin arpoman ajan verran (jos ei toteudu vaihtaa uuteen musiikkiin.)

botti liittyy palvelimelle ja sitten puhekanavalle,
