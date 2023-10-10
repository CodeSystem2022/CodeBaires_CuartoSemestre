function soyAsincrona(miCallback){// Le pasamos el parametro como funcion
    setTimeout(function () { 
        console.log('Hola soy una funcion asincrona');
        miCallback();
    },1000); // 1000 ms
    
}

console.log('Iniciando el proceso...');
soyAsincrona(function() {
    console.log('Terminando el proceso...');
});
//En la terminal nos ubicamos en la carpeta async y digitamos: nodemon callback.js

