# Funciones : Bloque de código reutilizable, que es invocada y que cumple una tarea en específico. Puede tener o no párametros

# Definición de una función sin parametros
def hola_mundo():
    print("Hola mundo")
    
# Invocar la función
hola_mundo()

# Definición de una función con párametros y return
def saludo_nombre(nombre):
    respuesta = "Hola " + nombre
    
    #return: devolver el resultado
    return respuesta

# "Rafa", el argumento(párametro, el valor que enviaremos)
respuesta = saludo_nombre("Rafa")
print(respuesta)


# Definición de una función que realice una suma

def suma(num1, num2):
    resultado = num1 + num2
    return resultado

resultado_suma = suma(5,8)
print("5 + 8 = ", resultado_suma)

