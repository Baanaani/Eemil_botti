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

botti liittyy puhekanavalle jolla olet ja alkaa soittamaan musiikkia hetken aikaa ostain satunnaisesta kohdasta, jonka se on ottanut jostakin musiikin toisto palvelusta. /quit komento poistaisi botin kanavalata ja /ruoka voisi säätää ruuan alkamis ajankohtaa.
selkokielellä
liitä botti jäseneksi serverille.
soittoajan määrityksen ajastin alkaa klo 8.00 ja loppuu 15.00 ihan sama mitä tekee
(/ajastin komento, jolloin ajastin alkaa käydä ja loppuu /lopeta ajastin)
soittoajan määritys 30min-90min 
arpoo monenko minuutin kuluttua musiikki alkaa soida
alkaa soida uudelleen (loop)
soittoaika 15sec-30sec
valitsee musiikin ennalta määritetystö paikasta
musiikissa jäljellä ainakin botin arpoman ajan verran (jos ei toteudu vaihtaa uuteen musiikkiin.)

botti liittyy palvelimelle ja sitten puhekanavalle,


jolla olet ja alkaa soittamaan musiikkia hetken aikaa jostain satunnaisesta kohdasta, jonka se on ottanut jostakin musiikintoisto palvelusta. /quit komento poistaisi botin kanavalata ja /ruoka voisi säätää ruuan alkamis ajankohtaa.

