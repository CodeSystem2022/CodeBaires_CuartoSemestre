
let nombre = process.env.NOMBRE || 'Sin nombre';  // or valor por default de la variable de entorno
let web = process.env.WEB || 'No tengo web';   // las variables de entorno van por convencion en MAYUSCULAS y separadas por guion bajo si fueran dos palabras juntas

console.log('Hola ' + nombre);
console.log('Mi web es : ' + web);