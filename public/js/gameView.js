//      [[ GAME ]]
console.group();
console.log(`CapacityNow: ${Boat.capacityNow}`);
console.log(`Position: ${Boat.position}`);
console.groupEnd();

// btnCounters DELETE BEFORE
document.getElementById("btn-start").addEventListener("click", () => {
  game.start();
  document.getElementById("btn-start").style.display = "none";
});
document.getElementById("pause-game").addEventListener("click", () => {
  if (game.start) {
    game.stop();
    document.getElementById("btn-start").style.display = "flex";
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

  console.log(`Position ${Boat.id}: ${Boat.position}`);
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
    BoatHtml.style.transform = "translateX(-40vw)";
  }
  if (Boat.position == 1) {
    if (Boat.capacityNow == Boat.capacityMax) {
      BoatHtml.style.transform = "translateX(0.1vw)";
      objPropertyHtml.style.transform = `translateX(${timeSet.back}vw)`;
    }
    if (Boat.capacityNow < Boat.capacityMax) {
      BoatHtml.style.transform = "translateX(0.1vw)";
    //   objPropertyHtml.style.transform = `translateX(${timeSet.back}vw)`;
    }
    BoatHtml.style.transform = "translateX(0.1vw)";
  }
  if (Boat.position === 0) Boat.position = 1;
  else Boat.position = 0;
  actualizarObj(objPropertyHtml);
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
    }
    if (Boat.capacityNow < Boat.capacityMax) {
        ObjectHtml.style.transform = `translateX(${timeSet.back1}vw)`;
        Boat.capacityNow = 2;
    }
    Boat.capacityNow--;
  }
  actualizarObj(objProperty);
};

const actualizarObj = (objProperty) => {
  if (objProperty.state == false) {
    Boat.copilot = objProperty.Element;
    Boat.capacityNow = 2;
    objProperty.state = true;
    // DENEGAR QUE ENTREN MÁS
    console.log(`State - ${objProperty.id}: ${objProperty.state}`);
    console.log(`Copilot - ${Boat.copilot}: ${objProperty.id}`);
  } else {
    Boat.copilot = "";
    objProperty.state = false;
    console.log(`State - ${objProperty.id}: ${objProperty.state}`);
    console.log(`Copilot - ${Boat.copilot}: ${objProperty.id}`);
  }
};
//-------------------- functions moves END--------------------

// console.log(`CapacityNow: ${objJSON.capacityNow}`);
// console.log(`Position ${objJSON.id}: ${objJSON.position}`);
