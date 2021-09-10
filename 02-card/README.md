# Laboratorio 02 - Theming a card
[Tutti i laboratori](https://github.com/Mekit/coding-lab) di Coding Lab

## Obiettivi

L'obbiettivo del *laboratorio 02* è quello di provare a sfruttare le potenzialità di Sass per temizzare una card con un layout custom.
Verrà introdotta anche la nomenclatura [BEM](https://en.bem.info/methodology/) *Block Element, Modifiers* con cui è stato scritto il markup html della card.

## Todo

1. Clonare la repositoryin locale;
2. Installare le dipendenze del progetto `npm i` e lanciare il progetto `gulp`;
3. Analizzare il risultato da ottenere nel browser (layout e animazioni all'hover);
4. Analizzare la struttura del progetto e performance di compilazione;
  - Notare il file `style.scss` in cui solo una parte di bootstrap viene inclusa nel progetto;
  - Questo permette tempi di compilazione decisamente ridotti;
  - Il file `style.css` compilato contiene circa 2.000 righe invece che 12.000 dei precedenti progetti 🚀
5. Analizzare il file `_variables.scss` dove alcune variabili sono state personalizzate;
  - Le variabili relative ai grigi sono state riportate tutte per poter essere utilizzate anche nel file `_variables.scss`;
  - Solo una variabile (`$gray-900`) viene utilizzata nel progetto ma può essere una buona norma riportare l'intero blocco di variabili nel caso si voglia in futuro personalizzare tutti i grigi del progetto;
  - La variabile `$link-color` è stata impostata su `$body-color` (il colore del testo standard): bootstrap di base imposta tutti i link con un colore; questa regola risulta spesso essere troppo aggressiva: se tutti i link all'interno del progetto sono colorati, spesso ci sarà la necessità si sovrascrivere questa regola (es. quando si creare un componente card in cui tutto il contenuto è incluso in un link) 🤓
  - La variabile `$link-decoration` è stata impostata su `none` per lo stesso motivo;
6. Analizzare il markup della card presente nel file `index.html`;
  - Il markup è stato scritto utilizzando la nomenclatura *BEM*;
  - Notare l'utilizzo del doppio underscore `__` per descrivere un sotto componente della `card`: `card__img`, `card__content`, `card__cta`;
  - Notare l'utilizzo del doppio trattino `--` per descrivere un modificatore della card `card--shodow`;
7. Cancellare all'interno del file `_custom.scss` da riga 13;
8. Provare a riscrivere il componente scss 😎
  - Sarà sempre possibile sbirciare nella [ripository](https://github.com/Mekit/coding-lab/blob/main/02-card/scss/_custom.scss) per capire come era stato scritto in origine 👀

## Bem

L'utilizzo della nomenclatura *BEM* apparentemente non ha nessuna ripercussione a livello di codice;
In realtà porta con se grandi vantaggi:
- Rende trasparente e chiara la definizione di un componente;
- Obbliga il coder a scrivere un markup nella maniera corretta interrogandosi sulle relazioni tra componenti, sotto componenti e modificatori;
- Rende più mantenibile il codice;
- Inoltre riduce la complessità del css generato evitando complessità e eccessive nidificazione; evita per esempio la generazione di selettori molto lunghi:

```css
/* selettore con 3 livelli di nidificazione */
a .card .cta i{
  color: ###;
}
/* selettore con 1 livello di nidificazione */
.card__cta i{
  color: ###;
}
```

## Risorse e tutorial
- [You Probably Need BEM CSS in Your Life](https://www.youtube.com/watch?v=er1JEDuPbZQ)
- [7 reasons to use BEM css](https://medium.com/soliddigital/7-reasons-to-use-bem-css-a7c8475318fe)

