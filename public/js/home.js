//      [ VIEW HOME ]
// Variables
let btnPlay = "btn-play-home";
let modalInstrucctions = `
    <section class="caja">
        <div class="SubCaja">
            <p class="content-instruction texto">
                Para cruzar el río se puede usar una barca.El granjero hará de
                barquero: En la barca sólo cabe el granjero y, o una ave o la cesta de
                nueces. También se sabe que, en ausencia del granjero: El halcón se
                comería al loro si están ambos en la misma orilla. El loro se comería
                las nueces si están ambos en la misma orilla.
            </p>
            <a id="Btn-modal-instructions" href="/public/html/game.html" class="boton">INICIAR</a>
        </div>
    </section>
`;

// OnClick => btnPlay
document.getElementById(btnPlay).addEventListener("click", () => {
  console.log("Estoy Vivo soy el btnPlay");
  printModal(modalInstrucctions);
});

// document.getElementById().addEventListener("click", () => {

// });
