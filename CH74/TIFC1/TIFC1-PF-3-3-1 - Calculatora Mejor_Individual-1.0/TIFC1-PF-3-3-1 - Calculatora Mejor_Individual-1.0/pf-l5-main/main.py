from math import prod

#Función para mostrar al usuario las opciones que puede elegir para hacer una operación
def main():
  print("Welcome to calculator, please choose a valid operation to do\n")
  print("1. Addition")
  print("2. Substract")
  print("3. Multiply")
  print("4. Division\n")

#Función para correr las ejecuciones de acuerdo a la operación elegida
def chosen_operation():
  option = input("Select the chosen option here\n")
  match option:
    case "1":
      print("The selected operation is: addition\n")
      print("***Please enter the number of numbers to add***")
      n = int(input("How many numbers do you want to add?: "))
      if n >= 2:
        add_total = 0
        for i in range(n):
          value = float(input(f"Enter the number {i+1}: "))
          add_total += value
        print()
        print(f"The addition of the {n} numbers is: {add_total}\n")
      else:
          print()
          print("Error: Almost you must enter 2 numbers to add\n")
    case "2":
        print("The selected operation is: substraction\n")
        print("***Please enter the number of numbers to substract***")
        n = int(input("How many numbers do you want to substract?: "))
        if n >= 2:
          sub_total = None
          for i in range(n):
            value = float(input(f"Enter the number {i+1}: "))
            if sub_total is None:
              sub_total = value
            else:
              sub_total -= value
          print()
          print(f"The substraction of the {n} numbers is: {sub_total}\n")
        else:
          print()
          print("Error: Almost you must enter 2 numbers to substract\n")
    case "3":
      print("The selected operation is: multiplication\n")
      print("***Please enter the numbers to multiply***")
      n = int(input("How many numbers do you want to multiply?: "))
      if n >= 2 :
        multi_total = 1
        for i in range(n):
          value = float(input(f"Enter the number {i+1}: "))
          multi_total *= value
        print(f"The multiplication of the {n} numbers is: {multi_total}")
      else:
        print()
        print("Error: Almost you must enter 2 numbers to multiply\n")
    case "4":
      print("The selected operation is: division\n")
      print("***Please enter the numbers to divide***")
      num1 = float(input("Enter the fisrt number: "))
      num2 = float(input("Enter the second number: "))
      result = num1/num2
      print(f"The result of division entered is: {result}\n")
    case _:
      print ("The selected operation is invalid, this program has ended")
  
#Función para mostrar las funcionalidades de pruebas
def menu_pruebas():
  print("The functionalities invoked for the tests are as follows:\n")
  print("1. Addmultiplenumbers (This function take a list of parameters)")
  print("2. Multiplymultiplenumbers (This function take a list of parameters)")
  print("3. Isiteven (This function take 1 parameter)")
  print("4. isitaninteger (This function take 1 parameter)\n")

#Función de sumar lista de números y retorna el resultado
def addmultiplenumbers(numbers):
  return sum(numbers)

#Función de multiplicar números y retorna el resultado
def multiplymultiplenumbers(numbers):
  return prod(numbers)

#Funcón para verificar sí un número es par y entero y devuelve un valor booleano

def isiteven(num):
  if num%2 == 0 and isinstance(num, int):
    result = True
    return result
  else:
    return False
  
#Función que verifica sí un número es entero y devuelve un valor booleano

def isitaninteger(num):
  if isinstance(num, int):
    return True
  else:
    return False
  

