async function hola (nombre){
    return new Promise (function (resolve,reject) {
        setTimeout( function () {
            console.log('hola'+nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre){
    return new Promise( (resolve,reject) => {
        setTimeout( function () {
            console.log('bla bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise( ( resolve, reject) => {
        setTimeout(function() {

            console.log('adios' +nombre);

            resolve();
        }, 1000);
    });
}

//await hola('Ariel'); // esto es una mala sintaxis

async function main (){
    await hola('Ariel');
}

main();