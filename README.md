# Focustreak🔥

EN: Official repository for Focustreak development team

IT: Repository ufficiale per il team di sviluppo di Focustreak

## Come usare questa repo

Focustreak è hostato su Github per motivi organizzativi e di convenzione tecnica. Qui sotto le modalità per come usare correttamente la repository:


### Nota: prima di clonare la repo è consigliato configurare l'identità di Git con i comandi:
```
git config --local user.name "nome"
git config --local user.mail "mail"
```


1) Dal momento che Github è un server remoto che non gestisce i progetti locali, sarà Git ad occuparsi della gestione locale. Per copiare la repo da Github (cloud) a Git (directory locale) è necessario clonare il progetto. Esso può essere clonato usando il comando:
```
git clone
```
2) Dopo aver clonato il progetto, si può iniziare a lavorare. Il flusso di lavoro da seguire è questo:
- Il progetto ha 2 branch (i branch sono versioni diverse dello stesso codice che possono essere modificate senza conseguenze. Esempio: se si vuole introdurre una nuova funzione si crea un branch apposito e si modifica quello, in modo da non toccare il codice principale, nel caso in cui la nuova funzione sminchi tutto e non funzioni più niente): dev (il quale viene usato in fase di sviluppo) e main (il progetto finale, che non deve essere toccato)
- Ogni volta che si vuole modificare il codice, aggiungere/rimuovere feature, risolvere bug o fare qualsiasi altra modifica al progetto si deve creare un branch (possibilmente con un nome sensato, esempio bug/fix-bug1) partendo da **dev** con il comando:
```
git checkout -b nome_branch
```
oppure:
```
git branch nome_branch
git checkout nuovo_branch
```
Questo comando oltre a creare il branch ci si sposta automaticamente.
Non si deve **mai** modificare il branch dev direttamente, a meno che di modifiche sicure al 100%, **ne tantomeno il branch main**

- Per passare da un altro branch, usare il comando:
```
git checkout nome_branch
```
- Una volta finito di editare il codice e finito di testare le modifiche, il branch usato per implementare il nuovo codice deve essere **mergeato** dal branch attuale al branch **dev**. Mergeare un branch con un altro vuoldire aggiungere le modifiche effettuate sul nostro branch, al codice del branch destinatario (possono essere aggiunte, modifiche o rimozioni di codice). Per mergeare un branch con un altro, è necessario aprire una **pull request**, ma non è oggetto di questa guida.
Nota: è consigliato eliminare i branch utilizzati una volta mergeati con dev.

3) Lavorando più persone sullo stesso progetto, chiaramente le modifiche devono essere sincronizzate sia in locale che su Github:
- Per visualizzare i file modificati, usare il comando:
```
git status
```
- Per aggiungere i file modificati (rossi) ...
