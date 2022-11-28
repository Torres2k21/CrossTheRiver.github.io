// Regex para filtrar
const en = /[0-9]/;
const ed = /[.]/;
const enn1 = /[-]/;
const enn2 = /[-][0-9]+/;

// Creando las variables que contendran los inputNums
let inputNum0, inputNum1, inputNum2, inputNum3, inputNum4, 
    inputNum5, inputNum6, inputNum7, inputNum8, inputNum9, inputNumPunto;
inputNum0 = "input-num-0";
inputNum1 = "input-num-1";
inputNum2 = "input-num-2";
inputNum3 = "input-num-3";
inputNum4 = "input-num-4";
inputNum5 = "input-num-5";
inputNum6 = "input-num-6";
inputNum7 = "input-num-7";
inputNum8 = "input-num-8";
inputNum9 = "input-num-9";
inputNumPunto = "input-punto";
let inputC = "input-c";
let btnParen, btnDelet, btnPor, btnDiv, btnSum, btnRes, btnResult;
btnParen = "btn-paren";
btnDelet = "btn-delet";
btnPor = "btn-por";
btnDiv = "btn-div";
btnSum = "btn-sum";
btnRes = "btn-res";
btnResult = "btn-result";

let acumPunto = 0;
let operacionString = "";

// Cuando cargue la pagina
window.onload = Load;
function Load() {
  // console.info("Hola consola, ya cargo...")
  addEventListener("keydown", (e) => {
    // console.log(e)
    if (
      (e.key >= 0 && e.key <= 9) ||
        e.key == "+" ||
        e.key == "-" ||
        e.key == "*" ||
        e.key == "/" ||
        e.key == "." ||
        e.key == "Escape"
      ) {
      inputNum = e.key;
      operacionString += inputNum;
      // Borra todo
      if (e.key == "Escape") {
        document.getElementById("contenedor-calc-result").textContent = "0";
        document.getElementById("contenedor-calc-previw").textContent =
          " Resultado...";
        operacionString = "";
        acumPunto = 0;
        document.getElementById("poio").dataset.icon =
          "noto:front-facing-baby-chick";
        console.clear();
      } else {
        document.getElementById("contenedor-calc-result").textContent =
          operacionString;
      }
      if (e.key == ".") {
        btnPuntoON();
      }
      if (e.key == "*" || e.key == "/" || e.key == "+" || e.key == "-")
        acumPunto = 0;
    }
    if(e.key == "Enter"){
      btnResultON();
    }
  });
}

// btnCalcClik Agrega los EventListener para cada btn
const btnCalcClick = (idBtn) => {
  document.getElementById(idBtn).addEventListener("click", () => {
    if (idBtn == btnParen || idBtn == btnDelet) {
      console.warn("!!Inhabilidato!!");
    } else {
      var inputNum = document.getElementById(idBtn).textContent;
      operacionString += inputNum;
      // Borra todo
      if (idBtn == inputC) {
        document.getElementById("contenedor-calc-result").textContent = "0";
        document.getElementById("contenedor-calc-previw").textContent =
          " Resultado...";
        operacionString = "";
        acumPunto = 0;
        document.getElementById("poio").dataset.icon =
          "noto:front-facing-baby-chick";
        console.clear();
      } else {
        document.getElementById("contenedor-calc-result").textContent =
          operacionString;
      }
      //  btnPar1 || btnPar2 ||
      if (
        idBtn == btnPor ||
        idBtn == btnDiv ||
        idBtn == btnSum ||
        idBtn == btnRes
      )
        acumPunto = 0;
    }
  });
};

// Para que detecte los btnCalc
btnCalcClick(inputNumPunto);
btnCalcClick(inputNum0);
btnCalcClick(inputNum1);
btnCalcClick(inputNum2);
btnCalcClick(inputNum3);
btnCalcClick(inputNum4);
btnCalcClick(inputNum5);
btnCalcClick(inputNum6);
btnCalcClick(inputNum7);
btnCalcClick(inputNum8);
btnCalcClick(inputNum9);
btnCalcClick(inputC);
btnCalcClick(btnPor);
btnCalcClick(btnDiv);
btnCalcClick(btnSum);
btnCalcClick(btnRes);
btnCalcClick(btnParen);
btnCalcClick(btnDelet);

// Insercion de los valores
let operacion = "";
let arryOpera;

// Funcion para mostrar el resultado
const btnResultON = () => {
  operacion = operacionString;
  arryOpera = [...operacion];
  console.log("Enviando la operacion...");
  detectarNums(arryOpera);
  ejecutarOperacion(arryOpera);
  // ///////////////Almacena el input como el resultado
  operacionString = arryOpera.toString();
  if (operacion == 0 || operacion == NaN) {
    console.warn("Operacion aun no ingresada");
    document.getElementById("contenedor-calc-result").textContent = "0";
    document.getElementById("contenedor-calc-previw").textContent =
      " Resultado...";
  } else {
    document.getElementById("contenedor-calc-previw").textContent += " =";
    document.getElementById("poio").dataset.icon = "noto:hatching-chick";
  }
  // Para que no se pueda el punto
  acumPunto = 2;
}

// Funcion para regular el PUNTO
const btnPuntoON = () => {
  if (acumPunto >= 1) {
    operacionString = operacionString.slice(0, -1);
    document.getElementById("contenedor-calc-result").textContent =
      operacionString;
    acumPunto = 0;
  }
  acumPunto++;
};


// Btn-result
document.getElementById("btn-result").addEventListener("click", () => {
  btnResultON();
});

// input-punto
document.getElementById("input-punto").addEventListener("click", () => {
  btnPuntoON();
});

// dectectarNums()
const detectarNums = (inputNum) => {
  for (let i = 0; i < inputNum.length; i++) {
    // Longitud antigua del array
    let arrA = arryOpera.length;

    if (en.test(inputNum[i])) {
      if (en.test(inputNum[i + 1])) {
        let digit = inputNum[i] + inputNum[i + 1];
        inputNum.splice([i], 2, digit);
      }
      if (ed.test(inputNum[i + 1])) {
        let dot = inputNum[i] + inputNum[i + 1];
        inputNum.splice([i], 2, dot);
      }
      if (inputNum[i] < 0) {
        console.log(`NUMERO NEGATIVO ${i}: ${inputNum[i]}`);
        break;
      } else {
        if (enn1.test(inputNum[i - 1])) {
          if (en.test(inputNum[i + 1])) {
            let digit = inputNum[i] + inputNum[i + 1];
            inputNum.splice([i], 2, digit);
          } else {
            let negat = inputNum[i - 1] + inputNum[i];
            inputNum.splice([i - 1], 2, negat);
          }
        }
      }
    }
    // Nueva longitud del array
    let arrN = arryOpera.length;
    if (arrA != arrN) i--;
  }
  if (!operacion == 0 || !operacion === NaN) console.table(inputNum);
};

// ejecutarOperacion()
const ejecutarOperacion = (arryOpera) => {
  // Vista de las operaciones
  let previw = arryOpera.toString().replaceAll(",", "");
  document.getElementById("contenedor-calc-previw").textContent = previw;

  for (let i = 0; i < arryOpera.length; i++) {
    // Longitud antigua del array
    let arrAnt = arryOpera.length;

    switch (arryOpera[i]) {
      case `×`:
        let multi = arryOpera[i - 1] * arryOpera[i + 1];
        ///// Redondear al 0.x
        // multi= Math.round10(multi,-2);
        arryOpera.splice([i - 1], 3, multi);
        break;

      case `*`:
        let multi2 = arryOpera[i - 1] * arryOpera[i + 1];
        ///// Redondear al 0.x
        // multi= Math.round10(multi,-2);
        arryOpera.splice([i - 1], 3, multi2);
        break;

      case `÷`:
        let divi = arryOpera[i - 1] / arryOpera[i + 1];
        arryOpera.splice([i - 1], 3, divi);
        break;

      case `/`:
        let divi2 = arryOpera[i - 1] / arryOpera[i + 1];
        arryOpera.splice([i - 1], 3, divi2);
        break;

      case `+`:
        if (arryOpera[i + 2] == `×` || arryOpera[i + 2] == `÷`) {
          console.error("No se puede porque hay ×/÷ luego");
        } else {
          let suma = Number(arryOpera[i - 1]) + Number(arryOpera[i + 1]);
          arryOpera.splice([i - 1], 3, suma);
        }
        break;

      case `-`:
        if (arryOpera[i + 2] == `×` || arryOpera[i + 2] == `÷`) {
          console.log("No se puede porque hay ×/÷ luego");
        } else {
          let resta = Number(arryOpera[i - 1]) - Number(arryOpera[i + 1]);
          ///// Redondear al 0.x
          // resta= Math.round10(resta,-1);
          arryOpera.splice([i - 1], 3, resta);
        }
        break;
    }
    if (arryOpera[i + 2] == `×` || arryOpera[i + 2] == `÷`) {
      console.error("No se puede porque hay ×/÷ luego");
      if (arryOpera.indexOf(`×`) >= 0) {
        var j = arryOpera.indexOf(`×`);
      }
      if (arryOpera.indexOf(`÷`) >= 0) {
        var j = arryOpera.indexOf(`÷`);
      }

      switch (arryOpera[j]) {
        case `×`:
          let multi = arryOpera[j - 1] * arryOpera[j + 1];
          arryOpera.splice([j - 1], 3, multi);
          break;

        case `÷`:
          let divi = arryOpera[j - 1] / arryOpera[j + 1];
          arryOpera.splice([j - 1], 3, divi);
          break;
      }
    } else {
      if (enn2.test(arryOpera[i]) && arryOpera[i - 1] >= 0) {
        let resta = Number(arryOpera[i - 1]) + Number(arryOpera[i]);
        arryOpera.splice([i - 1], 2, resta);
      }
      if (enn2.test(arryOpera[i]) && arryOpera[i - 1] <= 0) {
        let resta = Number(arryOpera[i]) + Number(arryOpera[i - 1]);
        arryOpera.splice([i - 1], 2, resta);
      }
    }
    if (arryOpera[i] == arryOpera.length)
      console.error("No se encontro operacion...");
    // Nueva longitud del array
    let arrNuevo = arryOpera.length;
    if (arrAnt != arrNuevo) i = 0;
  }
  if (!operacion == 0)
    console.log(
      `%cResultado: ${arryOpera}`,
      `font-size: 12px; color: white; border-radius: 3px; border: solid 1px; padding: 2px;`
    );
  document.getElementById("contenedor-calc-result").textContent = arryOpera;
  if (arryOpera == Infinity) console.error("No se puede dividir entre 0");
  if (arryOpera.includes(NaN)) {
    console.warn("No se puede realizar la operación");
    document.getElementById("contenedor-calc-result").textContent = "Error";
  }
};

//-------------- MEJORAS -------------------
// INGRESAR EL DELETE POR TECLADO [→]
// operacionString = operacionString.slice(0, -1);
// Mejorar ()
// Que no deje enviar (resutl.)
// reuslt onclick=> btn-num

//-------------- ERRORES -------------------
////////Poder hacer multiples operaciones [RESULT]
//  ['-0.5', '-', '-0.1'] => -0.4
//  ['-0.5', '-', '-0.4'] => -0.999998 =>> -0.1
//  Podemos redondearlo 0.9998 Math.round10()
