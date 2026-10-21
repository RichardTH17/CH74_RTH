# Laboratorio: Consumir una API Web con Python

## Contexto

En la sesión aprendimos que una **API** permite que dos aplicaciones se comuniquen mediante solicitudes y respuestas.

En este laboratorio utilizarás **The Rick and Morty API** en lugar de Numbers API. El objetivo es practicar el mismo flujo visto en la demostración:

**Programa en Python → solicitud HTTP → API → respuesta JSON → diccionario de Python → uso de los datos**

Trabajarás principalmente en el archivo `main.py`.

---

## Objetivos

Al finalizar podrás:

- Realizar una solicitud `GET` a una API web con Python.
- Recibir y procesar una respuesta en formato JSON.
- Trabajar con la respuesta como un diccionario de Python.
- Crear y utilizar una función con parámetros y valor de retorno.
- Solicitar información al usuario con `input()`.
- Ejecutar pruebas automáticas con `pytest`.
- Explicar qué hace tu código y qué información estás consumiendo.

---

## Archivos del laboratorio

- `README.md`: instrucciones del laboratorio.
- `main.py`: archivo donde desarrollarás tu programa.
- `test.py`: pruebas automáticas. **No modifiques este archivo.**
- `requirements.txt`: dependencias necesarias.

---

## Requisitos previos

Necesitas:

1. Python instalado.
2. Visual Studio Code o un editor equivalente.
3. Conexión a Internet.
4. La biblioteca `requests`.
5. `pytest` para ejecutar las pruebas.

Abre una terminal dentro de la carpeta del laboratorio.

### Verifica Python

En Windows, alguno de estos comandos deberá mostrar tu versión:

```bash
python --version
```

o:

```bash
py --version
```

### Instala las dependencias

Puedes ejecutar:

```bash
python -m pip install -r requirements.txt
```

Si en tu equipo utilizas `py`:

```bash
py -m pip install -r requirements.txt
```

---

# Parte 1. Explora la API antes de programar

Abre en tu navegador:

```text
https://rickandmortyapi.com/api/character/1
```

Observa la respuesta. Está en formato **JSON**.

Busca, entre otros, estos campos:

- `id`
- `name`
- `status`
- `species`
- `gender`
- `origin`
- `location`
- `image`

Ahora cambia el número final de la URL:

```text
https://rickandmortyapi.com/api/character/6
```

### Preguntas para tu equipo

- ¿Qué cambió en la respuesta?
- ¿Qué representa el número al final de la URL?
- ¿Qué datos podrías utilizar en una aplicación?
- ¿Qué estructura de Python se parece a un objeto JSON?

> Nota: una extensión de tipo JSON Viewer puede hacer que la respuesta se vea más ordenada en el navegador, pero no cambia los datos enviados por la API.

---

# Parte 2. Función obligatoria: `character_fetch(character_id)`

Tu programa debe incluir una función llamada exactamente:

```python
character_fetch(character_id)
```

La función debe:

1. Recibir el ID de un personaje.
2. Construir la URL de la API usando ese ID.
3. Realizar una solicitud `GET` con `requests`.
4. Convertir la respuesta JSON en datos que Python pueda utilizar.
5. **Retornar un diccionario** con la información del personaje.

La URL base será:

```text
https://rickandmortyapi.com/api/character/
```

Por ejemplo, si la función recibe el número `6`, deberá consultar:

```text
https://rickandmortyapi.com/api/character/6
```

## Importante

La función debe **retornar** el diccionario. No es suficiente imprimirlo.

Piensa en esta diferencia:

```python
print(dato)   # muestra algo en pantalla
return dato   # entrega un resultado desde una función
```

Los tests necesitan recibir el valor retornado por tu función.

---

# Parte 3. Comprueba los datos obtenidos

Una vez que tu función pueda obtener un personaje, utiliza las claves del diccionario para acceder a información específica.

Tu programa deberá poder trabajar al menos con:

- ID
- nombre
- estado
- especie
- género

Por ejemplo, recuerda que para acceder a una clave de un diccionario usamos una estructura como:

```python
diccionario["clave"]
```

No copies este ejemplo literalmente como solución: identifica primero qué variable contiene la respuesta de tu API y cuáles son las claves disponibles.

---

# Parte 4. Construye la interacción en `main()`

La función `main()` será la parte interactiva de tu programa.

Tu programa deberá:

1. Dar la bienvenida al usuario.
2. Pedir un ID de personaje.
3. Convertir la entrada a un número entero.
4. Llamar a `character_fetch()` con ese ID.
5. Mostrar de manera legible, al menos:
   - nombre,
   - estado,
   - especie,
   - género.
6. Permitir que el usuario entienda claramente qué personaje fue consultado.

Ejemplo de experiencia esperada (los datos son ilustrativos):

```text
=== Consulta de personajes ===
Ingresa el ID de un personaje: 1

Nombre: ...
Estado: ...
Especie: ...
Género: ...
```

No necesitas copiar exactamente ese formato. Puedes personalizar la presentación.

---

# Parte 5. Manejo básico de errores — reto recomendado

¿Qué ocurre si alguien escribe letras en lugar de un número?

¿Qué ocurre si consulta un personaje que no existe?

Intenta evitar que el programa termine mostrando un error difícil de entender para el usuario.

Puedes investigar y utilizar:

- `try` / `except`
- `response.status_code`

Esta parte es un reto recomendado. Primero asegúrate de que la funcionalidad principal y los tests funcionen.

---

# Parte 6. Ejecuta tu programa

Desde la carpeta del proyecto:

```bash
python main.py
```

o en algunos equipos Windows:

```bash
py main.py
```

Prueba varios IDs, por ejemplo:

```text
1
2
6
10
```

---

# Parte 7. Ejecuta las pruebas

El archivo `test.py` contiene pruebas automáticas.

No necesitas modificarlo.

Ejecuta:

```bash
pytest
```

Si ese comando no es reconocido, intenta:

```bash
python -m pytest
```

o:

```bash
py -m pytest
```

## ¿Qué verifican las pruebas?

Los tests llaman directamente a tu función `character_fetch()` y comprueban que:

- al consultar el personaje `1`, el diccionario retornado contiene `id = 1`;
- al consultar el personaje `6`, el diccionario retornado contiene `id = 6`;
- la respuesta es un diccionario;
- existen campos fundamentales como `name`, `status` y `species`.

Si aparece:

```text
PASSED
```

la condición evaluada se cumplió.

Si aparece:

```text
FAILED
```

no significa automáticamente que `pytest` esté mal instalado. Lee el mensaje: la prueba pudo ejecutarse y encontró un resultado distinto del esperado.

---

# Trabajo en equipo y exposición

Aunque el laboratorio original era individual, esta versión puede realizarse en equipo.

Todos los integrantes deben comprender la solución. Al finalizar, el equipo deberá mostrar:

1. La URL o endpoint que consume.
2. Una respuesta JSON directamente en el navegador.
3. La función `character_fetch(character_id)`.
4. Dónde se realiza la solicitud `GET`.
5. Qué dato recibe la función y qué dato retorna.
6. Cómo acceden a los valores del diccionario.
7. La ejecución de `main.py`.
8. La ejecución de los tests.
9. Qué dificultad encontraron y cómo la resolvieron.

Durante la exposición cualquier integrante puede ser invitado a explicar una parte del código.

---

# Criterios de finalización

Antes de terminar, verifica:

- [ ] El programa ejecuta sin errores en un caso válido.
- [ ] Existe `character_fetch(character_id)`.
- [ ] La función realiza una petición a The Rick and Morty API.
- [ ] La función retorna un diccionario.
- [ ] `main()` solicita un ID al usuario.
- [ ] Se muestran datos específicos del personaje y no solamente todo el diccionario.
- [ ] Ejecutaste `pytest`.
- [ ] Puedes explicar request, response, JSON, diccionario y endpoint con tu propio código.
- [ ] No modificaste `test.py`.

---

## Recordatorio

No necesitas memorizar todo. Utiliza la documentación, revisa los mensajes de error y prueba tu código por partes.

El objetivo no es únicamente conseguir que los tests aparezcan en verde: debes poder explicar **qué información solicitas, cómo llega a Python y cómo la utilizas en tu programa**.
