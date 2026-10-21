# Importando el módulo json: fnos permite trabajar con el formato JSON
import json #Integrado en python
# Importando una biblioteca: nos permite hacer peticiones del tipo HTTP
import requests #Se debe instalar

# Consultamos los recursos de la API Rick and Morty
response = requests.get("https://rickandmortyapi.com/api/character/6")
character = json.loads(response.content)
print(character)

#Tipo de dato: diccionario
print(type(character))

print(character["id"])
print(character["name"])
print(character["status"])
print(character["species"])
print(character["gender"])
print(character["origin"]["name"])