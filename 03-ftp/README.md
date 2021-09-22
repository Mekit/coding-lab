# Laboratorio 03 - Ftp - Locale vs remoto
[Tutti i laboratori](https://github.com/Mekit/coding-lab) di Coding Lab

## Obiettivi

L'obbiettivo del *laboratorio 03* è quello di pubblicare un nostro progetto sul web. 🚀 

Per farlo sarà necessario comprendere il funzionamento della trasmissione di file tramite protocollo FTP.\
L'FTP o [File Transfer Protocol](https://it.wikipedia.org/wiki/File_Transfer_Protocol) è una modalità di trasferimento dati semplice per scaricare o uploadare file su un server remoto.\
I trasferimenti possono avvenire da locale a remoto (upload) o viceversa (download);

- Si definisce <em>locale</em> il contesto del proprio computer.
- Si definisce <em>remoto</em> il contesto del server.

## Cos'è un server?
Un <em>server</em> è un computer – posizionato da qualche parte nel mondo – sempre acceso e raggiungibile tramite internet.\
Ci sono vari provider di servizi web che offrono server specifici per ospitare (hosting) un sito web: es. Aruba (sconsigliato), Register, GoDadday, ecc.. in Mekit acquistiamo tutti i nostri server su [V-hosting](https://www.vhosting-it.com/) con cui ci troviamo molto bene.

## Pacchetti di hosting
La maggior parte dei provider offrono pacchetti di hosting comprendono questi servizi principali:

1. Registrazione e rinnovo di un dominio: es. mekit.it
2. Pannello di controllo di amministrazione (Plesk, cPanel)
3. Tot GB di spazio web
4. Web server [Apache HTTP Server](https://it.wikipedia.org/wiki/Apache_HTTP_Server) per la gestione di pagine dinamiche (esempio pagine scritte in PHP)
5. Caselle di posta e spazio e-mail (tot GB)
6. Database e software per la gestione (es. phpMyAdmin)

In questo laboratorio ci occuperemo solo di un servizio per ora: lo spazio web. \
Possiamo immaginare lo spazio web a nostra disposizione sul server come una cartella all'interno del quale possiamo inserire file html, css, immagini, .. e che è accessibile tramite internet da qualsiasi dispositivo munito di connessione.

## Todo A - Utilizzare Filezilla
1. Installare [FileZilla](https://filezilla-project.org/)
2. Fare il setup di un sito salvandolo nel <em>site manager</em>
   - Dare un nome alla connessione (di solito uguale al nome del dominio: lab.dev.mekit.it)
   - Inserire l'host (può essere un dominio o un indirizzo IP)
   - Inserire il nome utente e la password
3. Connettersi al server che si aprirà nella parte destra della schermata
4. Provare a pubblicare alcuni file sullo spazio web
   - N.B: non tutti i file che utilizziamo per sviluppare servono al sito in produzione
   - La cartella `node_modules` ci è utile (al momento) solo in fase di sviluppo quindi può non essere caricata sul server

## Todo B - Utilizzare l'FTP all'interno di VSCode
1. Installare l'estensione SFTP di liximomo
2. Fare il setup per connettere il nostro progetto al server
   - `Ctrl+Shift+P` su Windows/Linux oppure `Cmd+Shift+P` su Mac per aprire la palette dei comandi e lanciare `SFTP: config`
   - Dare un nome al server impostando il parametro `name`
   - Impostare il protocollo su `ftp`
   - Impostare la porta su `21`
   - Impostare i parametri di accesso `host`, `username`, `password`
   - Impostare il parametro `uploadOnSave` su `false` per il momento

```json
{
    "name": "Coding Lab Server",
    "host": "",
    "protocol": "ftp",
    "port": 21,
    "username": "",
    "password": "",
    "remotePath": "",
    "uploadOnSave": false,
    "ignore": [
        "node_modules",
        ".vscode",
        ".git",
        ".DS_Store",
        ".gitignore",
        "README.md",
        "gulpfile.js",
        "package.json",
        "package-lock.json"
    ]
}
```
3. Utilizzare la tab *SFTP: explorer* per navigare i file sul server
4. Provare a caricare qualche file sul server e a sperimentare con il parametro `uploadOnSave: true`

## Risorse e tutorial
- [VHosting - Hosting Low Cost](https://www.vhosting-it.com/hosting-low-cost/) esempio di pacchetti low cost che Mekit acquista per siti tradizionali (non troppo complessi)
- [SFTP - liximomo](https://marketplace.visualstudio.com/items?itemName=liximomo.sftp)

