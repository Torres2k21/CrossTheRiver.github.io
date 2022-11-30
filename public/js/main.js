// JS: persona3
/*
    [[REQUEST]]
    ->  Granjero y loro cruzan al lado derecho
    <-  vuelve granjero solo
    ->  granjero y halcon cruzan al lado derecho
    <-  vuelve granjero y loro
    ->  granjero y nueces pasan al lado derecho
    <-  vuelve granjero solo
    ->  granjero y loro cruzan al lado derecho y se quedan todos

    [[VIEWS]]
    ||First view: Home||
    --Bg-Home
    btn-play
    btn-instruction

    //||Second view: Instruction|| --Modal
    --Bg-Home-blur
    btn-back
    btn-play

    ||Third view: Game||
    --Bg-Game
    div.time-score
    btn-boat-player
    btn-parrot
    btn-hawk
    btn-walnuts

    ||Lost view||
    --Bg-Game-blur
    btn-try-now
    btn-home

    ||Victory view||
    --Bg-Game-blur
    div.time-score
    btn-home
*/

//      [[ Code ]]
// Objeto Boat
// const Boat = {
//   id: "Boat-player",
//   position: 0,
//   capacityMax: 2,
//   capacityNow: 1,
//   copilot: "ARTUROGAY",
//   parrot: {
//     id: "parrot",
//     position: 0,
//     state: false,
//   },
//   hawk: {
//     id: "hawk",
//     position: 0,
//     state: false,
//   },
//   walnuts: {
//     id: "walnuts",
//     position: 0,
//     state: false,
//   },
// };
const Boat = {
  id: "Boat-player",
  position: 0,
  capacityMax: 2,
  capacityNow: 1,
  copilot: "JsonKBrO",
};

const characters = {
  parrot: {
    id: "parrot",
    position: 0,
    state: false,
  },
  hawk: {
    id: "hawk",
    position: 0,
    state: false,
  },
  walnuts: {
    id: "walnuts",
    position: 0,
    state: false,
  },
};
characters.hawk.Element = document.getElementById(characters.hawk.id);
characters.parrot.Element = document.getElementById(characters.parrot.id);
characters.walnuts.Element = document.getElementById(characters.walnuts.id);

// REGLAS DEL JUEGO
if (
  (characters.hawk.position == characters.parrot.position &&
    characters.hawk.position != characters.walnuts.position) ||
  (characters.walnuts.position == characters.parrot.position &&
    characters.parrot.position != characters.hawk.position)
) {
  console.log("Perdiste");
}

/*
  hawk - parrot - walnuts => State 0

  hawk - parrot => State Lost
  parrot - walnuts => State Lost

*/


// if (Boat.position == 0) {
//   BoatHtml.style.transform = "translateX(-40vw)";
//   objPropertyHtml.style.transform = `translateX(${timeSet.go}vw)`;
// }
// if (Boat.position == 1) {
//   BoatHtml.style.transform = "translateX(0.1vw)";
//   objPropertyHtml.style.transform = `translateX(${timeSet.back}vw)`;
// }
// if (Boat.position === 0) Boat.position = 1;
// else Boat.position = 0;