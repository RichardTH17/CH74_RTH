import json
import requests


def character_fetch(character_id):
    """
    Consulta un personaje de The Rick and Morty API.

    Parámetro:
        character_id: ID numérico del personaje.

    Retorno esperado:
        Un diccionario de Python con la información del personaje.
    """
    response = requests.get(f"https://rickandmortyapi.com/api/character/{character_id}")
    character = json.loads(response.content)
    return character

    # TODO 1: Construye la URL utilizando character_id.
    # Pista: la URL base es:
    # https://rickandmortyapi.com/api/character/
    # TODO 2: Realiza una solicitud GET con requests.
    # TODO 3: Convierte la respuesta JSON a datos de Python.
    # TODO 4: Retorna el diccionario obtenido.
    pass


def main():
    print("=== Bienvenido al programa de consulta de personajes de Rick and Morty ===")
    # TODO 5: Solicita al usuario el ID de un personaje.
    # TODO 6: Convierte el dato ingresado a un entero.
    n = int(input("Ingresa el ID de un personaje:\n"))
    print()
    try:    
        # TODO 7: Llama a character_fetch().
        personaje = character_fetch(n)
        # TODO 8: Muestra de forma legible:
        # nombre, estado, especie y género.
        print("Nombre: " + personaje["name"])
        print("Status: " + personaje["status"])
        print("Especie: " + personaje["species"])
        print("Género: " + personaje["gender"])
        print()
    
    except:
        response = requests.get(f"https://rickandmortyapi.com/api/character/{n}")
        print("An exception occurred")
        print("Response_Status_Code = " + str(response.status_code))
        print(response.text)
    # RETO: Maneja una entrada inválida o un personaje inexistente.
    pass


if __name__ == "__main__":
    main()
    
    
