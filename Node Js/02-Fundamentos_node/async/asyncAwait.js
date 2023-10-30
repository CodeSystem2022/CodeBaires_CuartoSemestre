async function hola (nombre){
    return new Promise (function (resolve,reject) {
        setTimeout( function () {
            console.log('hola'+nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre){  //Antes nos moestraba en formato syncrono
    return new Promise( (resolve,reject) => {  // usamos la sintaxis ES6
        setTimeout( function () {
            console.log('bla bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre) {// async nos crea un formato (aparentemente) sincrono, es lo q estamos buscando.
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
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

main();
