//this === global = true

// mostrar algo en consola 
//console.log();

// mostrar un mensaje en forma de error 
//console.error();

//Ejecutar un codigo despues de un intervalo de tiempo 
//setTimeout(()=> {});

//Ejeciutar un codigo cada intervalo de tiempo 
//setInterval(()=>{});

//Da prioridad de ejecucion a una funcion asincrona
//setImmdiate(() =>{});

//console.log(setInterval);

let i = 0;
let intervalo = setInterval(()=>{
    console.log('Hola');
    if (i ===  3){
        clearInterval(intervalo);//detenemos la funcion 
    }
    i++;
},1000);

setImmediate(()=>{
    console.log('Saludo inmediato');
});

//require();

console.log(__filename);

global.miVariable = 'mi variable global';
console.log(miVariable);