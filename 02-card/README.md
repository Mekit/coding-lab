# Laboratorio 02 - Theming a card
[Tutti i laboratori](https://github.com/Mekit/coding-lab) di Coding Lab

## Obiettivi

L'obbiettivo del *laboratorio 02* è quello di provare a sfruttare le potenzialità di Sass per temizzare una card con un layout custom.
Verrà introdotta anche la nomenclatura [BEM](http://getbem.com/naming/) con cui è stato scritto il markup html della card.

## Todo

- [ ] Clonare la repository
- [ ] Installare le dipendenze del progetto `npm i` e lanciare il progetto `gulp`
- [ ] Analizzare il risultato da ottenere nel browser (layout e animazioni all'hover)
- [ ] Analizzare la struttura del progetto e performance di compilazione
  - [ ] Notare il file `style.scss` in cui solo una parte di bootstrap viene inclusa nel progetto
  - [ ] Questo permette tempi di compilazione decisamente ridotti
  - [ ] Il file `style.css` compilato contiene circa 2.000 righe invece che 12.000 dei precedenti progetti 🚀
- [ ] Analizzare il file `_variables.scss` dove alcune variabili sono state personalizzate
  - Le variabili relative ai grigi sono state riportate tutte per poter essere utilizzate anche nel file `_variables.scss`;
  - Solo una variabile (`$gray-900`) viene utilizzata nel progetto ma può essere una buona norma riportare l'intero blocco di variabili nel caso si voglia in futuro personalizzare tutti i grigi del progetto.
  - La variabile `$link-color` è stata impostata su `$body-color` (il colore del testo standard): bootstrap di base imposta tutti i link con un colore; questa regola risulta spesso essere troppo aggressiva: se tutti i link all'interno del progetto sono colorati, spesso ci sarà la necessità si sovrascrivere questa regola (es. quando si creare un componente card in cui tutto il contenuto è incluso in un link 🤓);
  - La variabile `$link-decoration` è stata impostata su `none` per lo stesso motivo;
- [ ] e cancellare all'interno del file `_custom.scss` da riga 


## Risorse e tutorial


