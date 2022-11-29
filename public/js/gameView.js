//      [[ GAME ]]

// btnCounters
document.getElementById('btn-start').addEventListener('click', () =>{
    game.start();
    document.getElementById('btn-start').style.display="none";
})
document.getElementById('pause-game').addEventListener('click', () =>{
    if(game.start){
        game.stop();
        document.getElementById('btn-start').style.display="flex";
    }
})