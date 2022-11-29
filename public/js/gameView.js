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
  //boatPlayer.style.transform = "matrix(-1, 0, 0, 1, 0, 0)";
  moveBoatPlayer(boatPlayer, Boat);
  if (Boat.position === 0) Boat.position = 1;
  else Boat.position = 0;
  console.log(`Position: ${Boat.position}`);
  // actulizarBoat(Boat);
});

// Variable => parrot
let parrot = document.getElementById(Boat.parrot.id);
parrot.addEventListener("click", () => {
  actulizarBoat(Boat, Boat.parrot);
});

// Variable => hawk
let hawk = document.getElementById(Boat.hawk.id);
hawk.addEventListener("click", () => {
  actulizarBoat(Boat, Boat.hawk);
});

// Variable => walnuts
let walnuts = document.getElementById(Boat.walnuts.id);
walnuts.addEventListener("click", () => {
  actulizarBoat(Boat, Boat.walnuts);
});

// functions move
/**
 * moveBoatPlayer()
 * --Movimiento de todo el barco
 *
 * @param {String} BoatHtml   Id del HTML del BoatPlayer
 * @param {Object}  Boat      Objeto con toda la información
 *
 */
const moveBoatPlayer = (BoatHtml, Boat) => {
  if (Boat.position == 0) BoatHtml.style.transform = "translateX(-40vw)";
  if (Boat.position == 1) BoatHtml.style.transform = "translateX(2vw)";
};

const moveObect = () => {
    // Object ,position
}

/**
 * actualizarBoat()
 * --Actualiza el estado del Objeto Boat
 *
 * @param {object} objJSON          Objeto usado como "Boat"
 * @param {Property} objProperty    Propiedad del Objeto "Boat"
 *
 */
const actulizarBoat = (objJSON, objProperty) => {
  if (objJSON.capacityNow >= objJSON.capacityMax) {
    objJSON.capacityNow--;
    console.log(`CapacityNow: ${objJSON.capacityNow}`);
    console.log(`Position: ${objJSON.position}`);
  } else if (objJSON.capacityNow == 1) {
    objJSON.capacityNow++;
    console.log(`CapacityNow: ${objJSON.capacityNow}`);
    console.log(`Position: ${objJSON.position}`);
  }
  if (objProperty.state == false) {
    objProperty.state = true;
    console.log(`State - ${objProperty.id}: ${objProperty.state}`);
  } else if (objProperty.state == true) {
    objProperty.state = false;
    console.log(`State - ${objProperty.id}: ${objProperty.state}`);
  }
};

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
