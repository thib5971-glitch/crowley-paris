# Crowley à Paris · 1900-1929

Une carte interactive des lieux d'Aleister Crowley à Paris : 31 lieux, huit parcours qui se dessinent sur la carte, la frise 1900-1929, le plan de l'état-major (1820-1866), l'histoire complète de chaque adresse, ce qu'elle est devenue, et les photos d'hier et d'aujourd'hui (Wikimedia Commons). En français, anglais, espagnol, allemand et italien.

Site statique, sans serveur : il se publie tel quel sur GitHub Pages ou Cloudflare Pages.

## Mettre en ligne avec GitHub Pages
1. Crée un dépôt (par exemple `crowley-paris`) et dépose tout le contenu de ce dossier à la racine, puis Commit.
2. Dans le dépôt : Settings > Pages > Source : « Deploy from a branch », branche `main`, dossier `/ (root)`, Save.
3. Le site est en ligne au bout d'une minute à l'adresse indiquée (https://TON-PSEUDO.github.io/crowley-paris/).

## Fichiers
- `index.html`, `style.css`, `app.js` : la page et son code.
- `data/fr.json` … `data/it.json` : les lieux, les parcours, la frise et l'histoire de chaque lieu, une par langue (tirés de Paris 93, dans Horae 93).
- `data/oldq.json` : les recherches de photos anciennes sur Wikimedia Commons.
- `lib/` : Leaflet 1.9.4. `fonts/` : Marcellus et Manrope.

## Sources et crédits
Lieux et histoire d'après Tobias Churton, *Aleister Crowley in Paris* (Inner Traditions, 2022), R. Kaczynski, *Perdurabo* (2010), le journal de Crowley et la presse de l'époque. Fonds de carte © IGN (Géoplateforme). Itinéraires à pied : OpenStreetMap (FOSSGIS). Photos : Wikimedia Commons, avec auteurs et licences. Réalisation : Frater Nachash, auteur de l'application Horae 93 (https://horae93.app).
