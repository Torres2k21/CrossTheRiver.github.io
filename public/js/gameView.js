//      [[ GAME ]]

// btnCounters
document.getElementById('btn-start').addEventListener('click', () =>{
    ticker.start();
    document.getElementById('btn-start').style.display="none";
})
document.getElementById('pause-game').addEventListener('click', () =>{
    if(ticker.start){
        ticker.stop();
        document.getElementById('btn-start').style.display="flex";
    }
})