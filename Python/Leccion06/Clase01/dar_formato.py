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

#6.3 parte 3
mensaje = 'Nombre {n} Edad {e} Sueldo {s:.2f}'.format(n=nombre, e=edad , s=sueldo) # Lo que tiene, se lo asignamos a la variable  n
# print(mensaje)

diccionario = {'nombre':'Ivan', 'edad': 35, 'sueldo':8000.00 }
mensaje = 'Nombre {dic[nombre]} Edad {dic[edad]} Sueldo {dic[sueldo]}'.format(dic=diccionario)  #Renombramos el diccionario de terminos, con dic accedemos al valor de cada uno
print(mensaje)


