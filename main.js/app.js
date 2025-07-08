// declaracion del DOM
const $form = document.getElementById("form")
const $one = document.getElementById("one")
const $two = document.getElementById("two")
const $three = document.getElementById("three")
const $four = document.getElementById("four")
const $five = document.getElementById("five")
const $six = document.getElementById("six")
const $seven = document.getElementById("seven")
const $eight = document.getElementById("eight")
const $nine = document.getElementById("nine")
const $zero = document.getElementById("zero")
const $mas = document.getElementById("mas")
const $menos = document.getElementById("menos")
const $division = document.getElementById("division")
const $multiplicacion = document.getElementById("multiplicacion")
const borrar = document.getElementById("borrar")
const igual = document.getElementById("igual")
const botones = document.querySelectorAll("button");



//declaracion de function arrow

let suma = (n1, n2) => {
  return n1 + n2
}

let resta = (n1, n2) => {
  return n1 - n2
}

let multiplicar = (n1, n2) => {
  return n1 * n2
}
let dividir = (n1, n2) => {
  return n1 / n2
}

// declaracion variables let
let n1 = ""
let n2 = ""
let operador = ""
let valor = botones.textContent
let escribiendoPrimerNumero = true


botones.forEach(function (boton) {
  boton.addEventListener("click", function (evento) {


    if (escribiendoPrimerNumero) {
      n1 += valor
    } else {
      n2 += valor
    }

    if (operador === "+") {
      resultado = suma(n1, n2)

    }
    if (operador === "-") {
      resultado = resta(n1, n2)
    }
    if (operador === "/") {
      resultado = dividir(n1, n2)
    }
    if (operador === "*") {
      resultado = multiplicar(n1, n2)
    }
  });


});