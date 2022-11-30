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

// Variable => Boat-player
let boatPlayer = document.getElementById(Boat.id);
boatPlayer.addEventListener("click", () => {
  moveBoatPlayer(boatPlayer, Boat);
  if (Boat.position === 0) Boat.position = 1;
  else Boat.position = 0;
  console.log(`Position ${Boat.id}: ${Boat.position}`);
});

//-------------------- Varibles Objects START --------------------
// Variable => parrot
let parrot = document.getElementById(Boat.parrot.id);
parrot.addEventListener("click", () => {
  moveObject(parrot, Boat.parrot);
  actualizarObj(Boat.parrot);
});

// Variable => hawk
let hawk = document.getElementById(Boat.hawk.id);
hawk.addEventListener("click", () => {
  moveObject(hawk, Boat.hawk);
  actualizarObj(Boat.hawk);
});

// Variable => walnuts
let walnuts = document.getElementById(Boat.walnuts.id);
walnuts.addEventListener("click", () => {
  moveObject(walnuts, Boat.walnuts);
  actualizarObj(Boat.walnuts);
});
//-------------------- Varibles Objects END --------------------

//-------------------- functions moves START--------------------
/**
 * moveBoatPlayer()
 * --Movimiento de todo el barco
 *
 * @param {String}  BoatHtml   Id del HTML del "BoatPlayer"
 * @param {Object}  Boat       Objeto con toda la información
 * @param {Element} Object     Id del HTML del "Object"
 *
 */
const moveBoatPlayer = (BoatHtml, Boat, objProperty) => {
  if (Boat.position == 0) {
    BoatHtml.style.transform = "translateX(-40vw)";
    // objProperty.style.transform = "translateX(-40vw)";
  }
  if (Boat.position == 1) {
    BoatHtml.style.transform = "translateX(0.1vw)";
    // objProperty.style.transform = "translateX(2vw)";
  }
};

// moverObjeto => (parrot, hawk, walnuts)
const moveObject = (Object, objProperty) => {
  let pichula = {
    ida: "",
    vuelta: "",
  };
  switch (objProperty.id) {
    case "parrot":
      pichula.ida = "-15.7";
      pichula.vuelta = "0.1";
      break;

    case "hawk":
      pichula.ida = "-12.4";
      pichula.vuelta = "0.1";
      break;

    case "walnuts":
      pichula.ida = "-18.4";
      pichula.vuelta = "0.1";
      break;
  }

  if (objProperty.state == false) {
    Object.style.transform = `translateX(${pichula.ida}vw)`;
  }
  if (objProperty.state == true) {
    Object.style.transform = `translateX(${pichula.vuelta}vw)`;
  }
};

/**
 * actualizarBoat()
 * --Actualiza el estado del Objeto Boat
 *
 * @param {object} objJSON          Objeto usado como "Boat"
 * @param {Property} objProperty    Propiedad del Objeto "Boat"
 *
 */
const actulizarBoat = (objJSON) => {
  if (objJSON.capacityNow >= objJSON.capacityMax) {
    objJSON.capacityNow--;
    console.log(`CapacityNow: ${objJSON.capacityNow}`);
    console.log(`Position ${objJSON.id}: ${objJSON.position}`);
  } else if (objJSON.capacityNow == 1) {
    objJSON.capacityNow++;
    console.log(`CapacityNow: ${objJSON.capacityNow}`);
    console.log(`Position ${objJSON.id}: ${objJSON.position}`);
  }
};

const actualizarObj = (objProperty) => {
  if (objProperty.state == false) {
    objProperty.state = true;
    console.log(`State - ${objProperty.id}: ${objProperty.state}`);
  } else if (objProperty.state == true) {
    objProperty.state = false;
    console.log(`State - ${objProperty.id}: ${objProperty.state}`);
  }
};
//-------------------- functions moves END--------------------

// [[  TRASH  ]]

// Objeto Boat
// const Boat = {
//   id: "Boat-player",
//   position: 0,
//   capacityMax: 2,
//   capacityNow: 1,
//   Rancher: true,
//   parrot: {
//     id: "parrot",
//     state: false,
//   },
//   hawk: {
//     id: "hawk",
//     state: false,
//   },
//   walnuts: {
//     id: "walnuts",
//     state: false,
//   },
// };

//boatPlayer.style.transform = "matrix(-1, 0, 0, 1, 0, 0)";
