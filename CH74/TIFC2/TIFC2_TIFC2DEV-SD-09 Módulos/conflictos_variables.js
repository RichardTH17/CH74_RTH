//lista de dias de la semana
const dia = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendesay",
  "Thursday",
  "Friday",
  "Saturday"
]
//numeros ordinarios en lista
const ordinal = [
  null,
  'st',
  "nd",
  'rd',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'st',
  "nd",
  'rd',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'st'
]
//lista de meses del año
const mes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  'June',
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
let anio = new Date().getFullYear()
let day = new Date().getDay()
let date = new Date().getDate()
let month = new Date().getMonth()
function fecha() {
  return dia[day] + " " + date + ordinal[date] + " " + mes[month] + " " + anio
}
function printDate() {
  console.log("Today is " + fecha())
}
printDate()