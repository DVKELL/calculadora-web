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

const pantalla = document.getElementById("pantalla");
const operacionesContainer = document.getElementById("operaciones");

// Definicion de Variables
let numeroActual;
let numeroAcumulado;
let operacionMatematica;
let resultado;
let segundoNum;

// Arreglos
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
  BtnComa,
];

const botonesOperacionales = [
  BtnMultiplicar,
  BtnRestar,
  BtnIgual,
  BtnSuma,
  BtnDividir,
  BtnPorcentaje,
  BtnBorradoOperacion,
  BtnReinicioCalculadora,
  BtnBorrarDatos,
];

// diccionario
let posiblesOperaciones = {
  suma: "+",
  resta: "-",
  multiplicar: "x",
  dividir: "/",
  porcentaje: "%",
};

// Funciones

// Muestra en pantalla los botones que seleccione el usuario
const mostrarEnPantalla = (valor) => {
  //Funciona par aponer el primer valor
  if (pantalla.textContent === "" || pantalla.textContent === "0") {
    pantalla.textContent = valor;
  } else {
    // Leo todo el textcontent de la pantalla y le concateno el valor
    pantalla.textContent = pantalla.textContent + valor;
  }

  //El contenido de la pantalla se convierte en numero y se almacena
  numeroActual = Number(pantalla.textContent);
};

// Recorre los botones, les agrega un Event listener y muestra en pantalla el numero seleccionado
const obtenerValorBoton = (botones) => {
  for (const b of botones) {
    b.addEventListener("click", () => {
      let botonActual = b.textContent.trim();
      mostrarEnPantalla(botonActual);
    });
  }
};

// Obtiene el numero que esta en pantalla, lo almacena en una variable y limpia la pantalla
const guardarNumAnterior = () => {
  numeroAcumulado = Number(pantalla.textContent);
  pantalla.textContent = "";
};

// Obtiene el primer numero, el operador y lo muestra en pantalla
const verOperacionesRealizadas1 = () => {
  operacionesContainer.textContent = `${numeroAcumulado} ${posiblesOperaciones[operacionMatematica]}`;
};

// Obtiene el segundo numero y lo muestra en pantalla
const verOperacionesRealizadas2 = () => {
  operacionesContainer.textContent = `
  ${operacionesContainer.textContent} ${String(segundoNum)} =
  `;
};

// Obtiene el resultado de la operacion y lo muestra en pantalla
const obtenerResultado = (operacion) => {
  switch (operacion) {
    case "suma":
      resultado = numeroAcumulado + Number(pantalla.textContent);
      segundoNum = Number(pantalla.textContent);
      pantalla.textContent = resultado;
      break;
    case "resta":
      resultado = numeroAcumulado - Number(pantalla.textContent);
      segundoNum = Number(pantalla.textContent);
      pantalla.textContent = resultado;
      break;
    case "multiplicar":
      resultado = numeroAcumulado * Number(pantalla.textContent);
      segundoNum = Number(pantalla.textContent);
      pantalla.textContent = resultado;
      break;
    case "dividir":
      resultado = numeroAcumulado / Number(pantalla.textContent);
      segundoNum = Number(pantalla.textContent);
      pantalla.textContent = resultado;
      break;
    case "porcentaje":
      resultado = (numeroAcumulado * Number(pantalla.textContent)) / 100;
      segundoNum = Number(pantalla.textContent);
      pantalla.textContent = resultado;
      break;

    default:
      break;
  }
};

// Recorre cada uno de los botones y asigna funciones segun la operacion
const operacionARealizar = (botonesOperacionales) => {
  for (const b of botonesOperacionales) {
    switch (b.textContent.trim()) {
      case "%":
        b.addEventListener("click", () => {
          guardarNumAnterior();
          operacionMatematica = "porcentaje";
          verOperacionesRealizadas1();
        });
        break;

      case "AC":
        b.addEventListener("click", () => {
          pantalla.innerHTML = 0;
          numeroActual = 0;
        });
        break;

      case "C":
        b.addEventListener("click", () => {
          pantalla.innerHTML = 0;
          numeroActual = 0;
          numeroAcumulado = 0;
          operacionesContainer.innerHTML = "";
        });
        break;

      case "x":
        b.addEventListener("click", () => {
          guardarNumAnterior();
          operacionMatematica = "multiplicar";
          verOperacionesRealizadas1();
        });
        break;

      case "-":
        b.addEventListener("click", () => {
          guardarNumAnterior();
          operacionMatematica = "resta";
          verOperacionesRealizadas1();
        });
        break;

      case "+":
        b.addEventListener("click", () => {
          guardarNumAnterior();
          operacionMatematica = "suma";
          verOperacionesRealizadas1();
        });
        break;

      case "/":
        b.addEventListener("click", () => {
          guardarNumAnterior();
          operacionMatematica = "dividir";
          verOperacionesRealizadas1();
        });
        break;

      case "Borrar":
        b.addEventListener("click", () => {
          if (pantalla.textContent.length > 1) {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            numeroAcumulado = Number(pantalla.textContent);
          } else {
            pantalla.textContent = 0;
            numeroAcumulado = Number(pantalla.textContent);
          }
        });
        break;

      case "=":
        b.addEventListener("click", () => {
          if (operacionMatematica !== "") {
            obtenerResultado(operacionMatematica);

            // Evita que se pueda spamear el boton =
            operacionMatematica = "";
            verOperacionesRealizadas2();
          }
        });
        break;

      default:
        break;
    }
  }
};

// Funcion principal
const calculadora = () => {
  pantalla.textContent = 0;
  obtenerValorBoton(botonesNumericos);
  operacionARealizar(botonesOperacionales);
};

calculadora();
