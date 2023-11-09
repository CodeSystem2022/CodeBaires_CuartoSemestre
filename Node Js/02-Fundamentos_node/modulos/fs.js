const fs = require('fs');

//Primero leemos el archivo.txt
function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        console.log(data);
    });
}

leer(`${__dirname}/archivo.txt`, console.log); //Sintaxis ES6
    
