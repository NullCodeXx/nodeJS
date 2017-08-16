//fichier js node est isoler de tout les autres fichier autour de lui. (un peu comme les namespaces).
//n'a pas accès a énormément de chose seulement(boucle, boolee, petit function console.log etc..).
//Pour lancer le fichier, node main.js (dans le terminal).
console.log("test");

// Importer des fichiers pas encorestandariser.
//import fs from 'fs';

//Récupérer une function.
let hello = require('./main2.js');
hello();

//Autre manière d'importer module fs
let fs = require('fs');

// fs.readFile('/Library/WebServer/Documents/solo/project-chat/view/index.html','utf-8' ,function(error, data) {
//     console.log(data);
// });

//cible mysql
let mysqla = require('mysql');
let mysql = mysqla.createConnection({
host : "localhost",
user : "root",
password : "tour",
database : "music_db",
//socketPath: "/Application/MAMP/tmp/mysql/mysql.sock"
});
mysql.connect();
mysql.query('SELECT * FROM album', function (error, results, fields) {
  if (error) {
      throw error;
  }
  for(let i = 0; i < results.length ; i++) {
  console.log('The solution is: ', results[i].name);
    }
});

mysql.end();


/*
CONSIGNE TP: 

//Lien Doc.
https://github.com/mysqljs/mysql#introduction
https://github.com/mysqljs/mysql
GitHub
mysqljs/mysql
mysql - A pure node.js JavaScript Client implementing the MySql protocol.
TP Node.js 
En vous aidant de votre moteur de recherche favoris, 
de la documentation de Node.js et de la documentation de la library mysql que je vous ai linkée juste au dessus :
Faire un fichier database.js qui se connecte à la bdd
 mysql et récupère les small_doggo puis utiliser ce module depuis le fichier main.js pour lui faire afficher les doggos
En premier lieu, vous ferez l'affichage juste en console
 (donc le main.js ne va pas contenir grand chose) 
En second lieu, il faudra faire en sorte de créer un serveur 
http avec node pour rendre accessible les données
*/