from main import main, chosen_operation, menu_pruebas, addmultiplenumbers, multiplymultiplenumbers, isiteven, isitaninteger

if __name__=="__main__":
  main()
  chosen_operation()
  menu_pruebas()

  addition = addmultiplenumbers([7,8,9,10])
  print(f"The result of addition is: {addition}")
  multiplication = multiplymultiplenumbers([7,8,9,10])
  print(f"The result of multiplication is: {multiplication}")
  even = isiteven(6)
  print(f"The entered number is par and integer: {even}")
  isitinteger = isitaninteger(10.5)
  print(f"The entered number is an integer: {isitinteger}\n")
  