//      [[ GAME ]]
console.group();
console.log(`CapacityNow: ${Boat.capacityNow}`);
console.log(`Position: ${Boat.position}`);
console.groupEnd();

// btnCounters DELETE BEFORE
window.onload = Load;
function Load() {
  game.start();
}

let btnStart = document.getElementById("btn-start");
btnStart.style.display = "none";
btnStart.addEventListener("click", () => {
  game.start();
  btnStart.style.display = "none";
});

document.getElementById("pause-game").addEventListener("click", () => {
  if (game.start) {
    game.stop();
    btnStart.style.display = "flex";
    console.warn("Se pauso el Timepo!!!");
  }
});

//-------------------- Varibles Objects START --------------------
// Variable => parrot
characters.parrot.Element.addEventListener("click", () => {
  moveObject(characters.parrot.Element, characters.parrot);
});

// Variable => hawk
characters.hawk.Element.addEventListener("click", () => {
  moveObject(characters.hawk.Element, characters.hawk);
});

// Variable => walnuts
characters.walnuts.Element.addEventListener("click", () => {
  moveObject(characters.walnuts.Element, characters.walnuts);
});

// Variable => Boat-player  -----------------------------------------------------
let boatPlayer = document.getElementById(Boat.id);
boatPlayer.addEventListener("click", () => {
  moveBoatPlayer(boatPlayer, Boat, Boat.copilot);
  isError();
  // console.log(`Position ${Boat.id}: ${Boat.position}`);
  console.log(characters);
});
//-------------------- Varibles Objects END --------------------

//-------------------- functions moves START--------------------
const moveBoatPlayer = (BoatHtml, Boat, objPropertyHtml) => {
  let timeSet = { go: "", back: "" };
  switch (objPropertyHtml.id) {
    case "parrot":
      timeSet.go = "-51.5";
      timeSet.back = "-15.7";
      break;

    case "hawk":
      timeSet.go = "-51.5";
      timeSet.back = "-12.4";
      break;

    case "walnuts":
      timeSet.go = "-51.5";
      timeSet.back = "-18.4";
      break;
  }

  if (Boat.position == 0) {
    if (Boat.capacityNow == Boat.capacityMax) {
      BoatHtml.style.transform = "translateX(-40vw)";
      objPropertyHtml.style.transform = `translateX(${timeSet.go}vw)`;
    }
    switch (objPropertyHtml.id) {
      case characters.parrot.id:
        if (characters.parrot.state == false) {
          characters.parrot.position = 1;
          console.log("parrot - position 1");
        }
        break;

      case characters.hawk.id:
        if (characters.hawk.state == false) {
          characters.hawk.position = 1;
          console.log("hawk - position 1");
        }
        break;

      case characters.walnuts.id:
        if (characters.walnuts.state == false) {
          characters.walnuts.position = 1;
          console.log("walnuts - position 1");
        }
        break;
    }
    BoatHtml.style.transform = "translateX(-40vw)";
  }
  if (Boat.position == 1) {
    if (Boat.capacityNow == Boat.capacityMax) {
      BoatHtml.style.transform = "translateX(0.1vw)";
      objPropertyHtml.style.transform = `translateX(${timeSet.back}vw)`;
      // switch (objPropertyHtml.id) {
      //   case characters.parrot.id:
      //     characters.parrot.satate = true
      //     break;

      //   case characters.hawk.id:
      //     characters.hawk.satate = true
      //     break;

      //   case characters.walnuts.id:
      //     characters.walnuts.satate = true
      //     break;
      // }
    }
    if (Boat.capacityNow < Boat.capacityMax) {
      BoatHtml.style.transform = "translateX(0.1vw)";
      //   objPropertyHtml.style.transform = `translateX(${timeSet.back}vw)`;
    }
    BoatHtml.style.transform = "translateX(0.1vw)";
  }
  if (Boat.position === 0) Boat.position = 1;
  else Boat.position = 0;
  //   actualizarObj(objPropertyHtml);
};

// moverObjeto => (parrot, hawk, walnuts)
const moveObject = (ObjectHtml, objProperty) => {
  let timeSet = { go: "", back: "" };
  switch (objProperty.id) {
    case "parrot":
      timeSet.go = "-15.7";
      timeSet.back = "0.1";
      timeSet.go1 = "-70";
      timeSet.back1 = "-51";
      break;

    case "hawk":
      timeSet.go = "-12.4";
      timeSet.back = "0.1";
      timeSet.go1 = "-70";
      timeSet.back1 = "-51";
      break;

    case "walnuts":
      timeSet.go = "-18.4";
      timeSet.back = "0.1";
      timeSet.go1 = "-70";
      timeSet.back1 = "-51";
      break;
  }

  if (Boat.position == 0) {
    if (Boat.capacityNow < Boat.capacityMax) {
      ObjectHtml.style.transform = `translateX(${timeSet.go}vw)`;
    }
    if (Boat.capacityNow == Boat.capacityMax) {
      ObjectHtml.style.transform = `translateX(${timeSet.back}vw)`;
      Boat.capacityNow--;
    }
  }
  if (Boat.position == 1) {
    if (Boat.capacityNow == Boat.capacityMax) {
      ObjectHtml.style.transform = `translateX(${timeSet.go1}vw)`;
      objProperty.position = 1;
    }
    if (Boat.capacityNow < Boat.capacityMax) {
      ObjectHtml.style.transform = `translateX(${timeSet.back1}vw)`;
      objProperty.position = 0;
      Boat.capacityNow = 2;
      // console.log("Hola mundo")
    }
    Boat.capacityNow--;
  }
  isVictory();
  updateBoat(objProperty);
};

const updateBoat = (objProperty) => {
  if (objProperty.state == false) {
    Boat.copilot = objProperty.Element;
    Boat.capacityNow = 2;
    objProperty.state = true;
    // console.log(`State - ${objProperty.id}: ${objProperty.state}`);
    // console.log(`Copilot - ${Boat.copilot}: ${objProperty.id}`);
  } else {
    Boat.copilot = "";
    objProperty.state = false;
    // console.log(`State - ${objProperty.id}: ${objProperty.state}`);
    // console.log(`Copilot - ${Boat.copilot}: ${objProperty.id}`);
  }
};
//-------------------- functions moves END--------------------

// Si se comete un error
const isError = () => {
  if (
    (characters.walnuts.position == characters.parrot.position &&
      !characters.hawk.state &&
      (characters.walnuts.position != characters.hawk.position ||
        (characters.hawk.state == true &&
          Boat.position != characters.walnuts.position))) ||
    (characters.hawk.position == characters.parrot.position &&
      characters.parrot.state == characters.hawk.state &&
      (characters.hawk.position != characters.walnuts.position ||
        (characters.walnuts.state == true &&
          Boat.position != characters.hawk.position)))
  ) {
    console.warn("Perdiste");
    game.stop();
    // printModal(modalLost);
  }
};

const isVictory = () => {
  if (
    characters.parrot.position == 1 &&
    characters.hawk.position == 1 &&
    characters.walnuts.position == 1
  ) {
    console.log("Ganaste");
    game.stop();
    // printModal(modalFinally);
  }
};
