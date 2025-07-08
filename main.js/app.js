// declaracion del DOM 
const botones = document.querySelectorAll("button");
const $result = document.getElementById("result")
const $pantalla = document.getElementById("pantalla")

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

let escribiendoPrimerNumero = true


botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    let valor = boton.textContent

    let resultado = 0
    // 1. Si es un número
    if (!isNaN(valor)) {
      if (escribiendoPrimerNumero) {
        n1 += valor
        $pantalla.textContent = n1
      } else {
        n2 += valor
        $pantalla.textContent = `${n1} ${operador} ${n2}`
      }
    }

    // 2. Si es un operador
    if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
      operador = valor
      escribiendoPrimerNumero = false
      $pantalla.textContent = `${n1} ${operador}`
    }

    // 3. Si es el botón igual
    if (valor === "=") {
      const numero1 = Number(n1)
      const numero2 = Number(n2)


      if (operador === "+") {
        resultado = suma(numero1, numero2)

      }
      if (operador === "-") {
        resultado = resta(numero1, numero2)
      }
      if (operador === "/") {
        resultado = dividir(numero1, numero2)
      }
      if (operador === "*") {
        resultado = multiplicar(numero1, numero2)
      }

      $result.textContent = `Resultado: ${resultado}`

      $borrar.addEventListener("click", function () {
        n1 = ""
        n2 = ""
        operador = ""
        escribiendoPrimerNumero = true
        $pantalla.textContent = ""
        $result.textContent = ""
      })
    }


  });
});
