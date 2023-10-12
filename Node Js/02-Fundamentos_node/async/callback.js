//En la terminal nos ubicamos en la carpeta async y digitamos: nodemon callback.js

function hola(nombre, miCallback){// Le pasamos el parametro como funcion
    setTimeout(function () { 
        console.log('Hola '+nombre);
        miCallback(nombre);
    },1000); // 1000 ms
    
}

function hablar(callbackHablar){
    setTimeout( function  () => {
        console.log('bla bla bla bla');
        callbackHablar();
}, 1000);
}            





    
        console.log('Adios '+ nombre)

function adios(nombre, otroCallback){
    setTimeout(function () {
        console.log('Adios '+nombre);
        otroCallback();
    },1500);
}

//--Preoceso principal
console.log('Iniciando el proceso...');
hola('Carlos', function(nombre) { // Le pasammos el parametro y la función
    adios(nombre, function(){
            console.log('Terminando el proceso...');

    });
});




