# Bibliotecas = Módulos

# import : permite utilizar código que ya existe en un módulo.

import datetime

fecha_actual = datetime.datetime.now()

print("Fecha y hora actual", fecha_actual)
print("El día de hoy es: ", fecha_actual.strftime("%A"))