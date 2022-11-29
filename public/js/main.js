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

//[[Code]]

//Initial variables
let boatPlay = "btn-boat-player";
let parrot = "btn-parrot";
let hawk = "btn-hawk";
let walnuts = "btn-walnuts";


const Boat = {
    "capacityMax": 2,
    "capacityNow": 1,
    "Rancher": true,
    "parrot" : false,
    "hawk": false,
    "walnuts": false
}