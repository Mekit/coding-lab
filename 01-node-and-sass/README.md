# Laboratorio 01 - Node.js Gulp and Sass
[Tutti i laboratori](https://github.com/Mekit/coding-lab) di Coding Lab

## Obiettivi

L'obbiettivo del *laboratorio 01* è quello di utilizzare [Node.js](https://nodejs.org/it/), [Gulp](https://gulpjs.com/) e [Sass](https://sass-lang.com/) per sfruttare a pieno tutte le potenzialità di Boostrap e del preprocessori CSS.

## Todo

- [ ] Installare Node.js sulla propria macchina
	- [ ] [Installare Node.js su Windows e NPM](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
	- [ ] [Installare Node.js e NPM on Mac con Homebrew](https://medium.com/@hayasnc/how-to-install-nodejs-and-npm-on-mac-using-homebrew-b33780287d8f)
	- [ ] Verificare che sia installato utilizzando il comando `node -v` e `npm -v` sul terminale
- [ ] Clonare la repository di progetto in locale
- [ ] Installare tutte le dipendenze del progetto
  - [ ] Navigare con il terminale nella cartella del progetto
  - [ ] Installare le dipendenze utilizzando il comando `npm i` (npm install)
  - [ ] Constatare cosa succede nella cartella `node_modules`
- [ ] Installare gulp globalmente sulla propria macchina `npm install gulp-cli -g`
- [ ] Copiare il file `index.html` dal progetto `00-bootstrap`
	- [ ] Aggiornare le risorse rimuovendo i CDN in favore dei file in locale (css/style.css e javascript)
- [ ] Lanciare il progetto `npm run dev` oppure `gulp`
  - [ ] Node.js farà partire l'utility Gulp che si occuperà di compilare il file `style.css` ad ogni modifica effettuata ad un file `.scss`
  - [ ] Per interrompere il processo sul terminale digitare `ctrl + c`
- [ ] Modificare il file `scss/_variables.scss` per personalizzare il progetto sovascrivendo le variabili di default di bootstrap definite in `node_modules/boostrap/scss/_variables.scss`
  - [ ] Cambiare font-family
  - [ ] Modificare i colori
  - [ ] ...

## Risorse e tutorial
- [Browsersync + Sass + Gulp in 15 minutes](https://www.youtube.com/watch?v=q0E1hbcj-NI)

