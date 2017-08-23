/**
    1. create a new file `script.js`
    2. in `script.js` write a program which:
        - create a file `toto.txt`
        - write `Salut Toto !` inside `toto.txt`
    3. Bonus in `script.js` improve the program so that it can:
        -  list and display the content of the current folder using synchronous functions
        - list and display the content of the current folder using asynchronous functions
 */
//Librairie qui permet d'acceder a file systeme.
 const fs = require('fs');

//POUR CRÉE UN FICHIER .TXT
//doc : https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
fs.writeFile('toto.txt', function() {
    if(err) {
        console.error(err);
    }
    console.log('toto.txt à été crée');
    //POUR LIRE LE CONTENUS D'UN DOSSIER.
    //doc : https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback
    fs.readdir('.', function(err, files) {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log(files);
        }
    });
});

//Crée des function lambda : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
//Test in terminal : node script.js

