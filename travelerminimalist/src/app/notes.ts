// CONNETTERE ANGULAR AND BOOTSTRAP
// creo il progetto e voglio usare bootsrap versione 3 quindi lo installo localmente nel progetto
// npm install --save bootstrap@3
// devo dire ad angular che uso boostrap, lo faccio dal file di progetto angular.json
// in styles array aggiungo bootstrap prima del css di default
// "node_modules/bootstrap/dist/css/bootstrap.min.css",
// controllo dalla console del browser F12 e vedo nell'header lo style Bootstrap'

// PLUGIN ECLIPSE HTML CSS
// il plugin emmet crea html bootstrap in modo rapido

// CONNETTERE ANGULAR TO FIREBASE
// Creare il database dalla console di firebase
// Selezionare "add firebase to your app" e copiare il contenuto di var config
// nella cartella src/envirorment ho i due file di configurazione per test e produzione collego i rispettivi db
// incollando il contenuto precedentemente popiato tra {} parentesi comprese in una nuova var con nome a scelta
// importa l'envirorment in app/app.component

// INSTALL FIREBASE2
// npm install firebase angularfire2 --save
// in app/module import the component
// nel file app module, nell'array import aggiungi AngularFireModule.initializeApp(environment.firebase)

// USE A MODULE IN A MODULE
// es. use page-list in App
// in app.module import the page-list component e mettilo nell'array declarations
// nel html template di app usa il tag <page-list> ovvero il nome dato in page-list.module component

// use routing


