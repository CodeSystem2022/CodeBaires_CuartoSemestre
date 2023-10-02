# dar formato a un string

nombre = 'Ariel'
edad = 28
mensaje_con_formato = 'MI nombre es %s y tengo %d años'%(nombre, edad)
print(mensaje_con_formato)




# 6.3 Uso del método format() -> utilizamos place holder 
nombre = 'Juan'
edad = 19
sueldo = 3000
#mensaje_con_formato = 'nombre {} edad {} sueldo {:.2f}'.format(nombre, edad, sueldo ) #Marcador de posicion
#print(mensaje_con_formato)

mensaje = 'Nombre {0} Edad {1} Sueldo {2:.2f}'.format(nombre, edad, sueldo)
print(mensaje)
