# Laboratorio 03 - Ftp - Locale vs remoto
[Tutti i laboratori](https://github.com/Mekit/coding-lab) di Coding Lab

## Obiettivi

L'obbiettivo del *laboratorio 03* è quello di comprendere il funzionamento della trasmissione di file tramite protocollo FTP.\
L'FTP o [File Transfer Protocol](https://it.wikipedia.org/wiki/File_Transfer_Protocol) è una modalità di trasferimento dati semplice per scaricare o uploadare file su un server remoto.\
I trasferimenti possono avvenire da locale a remoto (upload) o viceversa (download);

Si definisce <em>locale</em> il contesto del proprio computer.\
Si definisce <em>remoto</em> il contesto del server.\

Un server è un computer – posizionato da qualche parte nel mondo – sempre acceso e raggiungibile.\
Ci sono vari provider di servizi web che offrono la possibilità di ospitare (hosting) un sito web: es. Aruba (sconsigliato), Register, GoDadday, ecc..

Tutti questi servizi offrono dei pacchetti standard di hosting che comprendono per esempio:

1. Registrazione e rinnovo di un dominio: es. mekit.it
2. Pannello di controllo di amministrazione (Plesk, cPanel)
3. Tot GB di spazio web
4. Web server [Apache HTTP Server](https://it.wikipedia.org/wiki/Apache_HTTP_Server) per la gestione di pagine dinamiche (esempio pagine scritte in PHP)
5. Caselle di posta e spazio e-mail
6. Database e software per la gestione (es. phpMyAdmin)

In questo laboratorio ci occuperemo solo di un servizio: lo spazio web.\
Possiamo immaginare lo spazio web a nostra disposizione sul server come una cartella all'interno del quale possiamo inserire file html, css, immagini, .. e che è accessibile tramite internet da qualsiasi dispositivo munito di connessione.



## Todo

1. Clonare la repositoryin locale;
2. Installare le dipendenze del progetto `npm i` e lanciare il progetto `gulp`;
3. Analizzare il risultato da ottenere nel browser (layout e animazioni all'hover);
4. Analizzare la struttura del progetto e performance di compilazione;
   - Notare il file `style.scss` in cui solo una parte di bootstrap viene inclusa nel progetto;
   - Questo permette tempi di compilazione decisamente ridotti;
   - Il file `style.css` compilato contiene circa 2.000 righe invece che 12.000 dei precedenti progetti 🚀


## Risorse e tutorial
- [You Probably Need BEM CSS in Your Life](https://www.youtube.com/watch?v=er1JEDuPbZQ)
- [7 reasons to use BEM css](https://medium.com/soliddigital/7-reasons-to-use-bem-css-a7c8475318fe)

