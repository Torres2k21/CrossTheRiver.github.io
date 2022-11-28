let servicios_=`
    <h1 class="title__modal">SOY PEEEE</h1>
    <br>
    <header>
    <h2>Ventana modal</h2>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad ab nobis dolorum esse impedit!</p>
    </div>
    </header>
`;


// Llando al modal
document.getElementById('Btn-modal').addEventListener('click', () =>{
    printModal(servicios_);
})