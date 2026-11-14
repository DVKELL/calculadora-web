/*
  Ejercicio 2:

Escribir un programa que simule una calculadora.
El programa debe:
- Replicar con HTML la interfaz de una calculadora estándar.
- Implementar la lógica de la calculadora con JavaScript.
- Permitir al usuario realizar operaciones básicas: suma, resta, multiplicación y división.
- Mostrar el resultado de las operaciones al usuario
*/

// Definicion de constantesDOM
const Btn1 = document.getElementById("1");
const Btn2 = document.getElementById("2");
const Btn3 = document.getElementById("3");
const Btn4 = document.getElementById("4");
const Btn5 = document.getElementById("5");
const Btn6 = document.getElementById("6");
const Btn7 = document.getElementById("7");
const Btn8 = document.getElementById("8");
const Btn9 = document.getElementById("9");
const Btn0 = document.getElementById("0");
const BtnMultiplicar = document.getElementById("x");
const BtnRestar = document.getElementById("-");
const BtnIgual = document.getElementById("=");
const BtnSuma = document.getElementById("+");
const BtnComa = document.getElementById(",");
const BtnDividir = document.getElementById("/");

const BtnPorcentaje = document.getElementById("%");
const BtnBorradoOperacion = document.getElementById("AC");
const BtnReinicioCalculadora = document.getElementById("C");
const BtnBorrarDatos = document.getElementById("Borrar");

// Definicion de Variables
let numeroActual;
let numeroAcumulado;
let operacionMatematica;

//
const pantalla = document.getElementById("pantalla");

//
const botonesNumericos = [
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  Btn5,
  Btn6,
  Btn7,
  Btn8,
  Btn9,
  Btn0,
];
const botonesOperacionales = [
  BtnMultiplicar,
  BtnRestar,
  BtnIgual,
  BtnSuma,
  BtnComa,
  BtnDividir,
  BtnPorcentaje,
  BtnBorradoOperacion,
  BtnReinicioCalculadora,
  BtnBorrarDatos,
];

const obtenerValorBoton = (botones) => {
  for (const b of botones) {
    b.addEventListener("click", () => {
      numeroActual = b.textContent.trim();
      mostrarEnPantalla(numeroActual);
    });
  }
};

const mostrarEnPantalla = (valor) => {
  //Funciona par aponer el primer valor
  if (pantalla.textContent === "") {
    pantalla.textContent = valor;
  } else {
    let numAnterior = pantalla.textContent;
    numeroActual = numAnterior + valor;
    pantalla.textContent = numeroActual;
  }
};

obtenerValorBoton(botonesNumericos);
