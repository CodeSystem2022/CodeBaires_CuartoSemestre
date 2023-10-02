# dar formato a un string

nombre = 'Ariel'
edad = 28
mensaje_con_formato = 'MI nombre es %s y tengo %d años'%(nombre, edad)

#Creamos una tupla
persona = ('Carla','Gomez',5000.00)
mensaje_con_formato = 'Hola %s %s . Tu sueldo es %.2f' # % persona #Aqui le pasamos  el objeto tupla
print(mensaje_con_formato % persona)