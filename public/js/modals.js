// --------------- CREATE MODAL ---------------
// Añadir un Objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};

// Crear elementos para el modal
const createCustomerElement = (element, attribute, children) => {
  let customElement = document.createElement(element);
  if (children !== undefined)
    children.forEach((el) => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11)
          customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
  addAttributes(customElement, attribute);
  return customElement;
};

// Imprimir modal
const printModal = (content) => {
  // creando contenedor interno
  const modalContentEl = createCustomerElement(
    "div",
    {
      id: "modal-content",
      class: "modal-content",
    },
    [content]
  );

  // creando contenedor principal
  const modalContainerEl = createCustomerElement(
    "div",
    {
      id: "modal-container",
      class: "modal-container",
    },
    [modalContentEl]
  );

  // imprimir el modal
  document.body.appendChild(modalContainerEl);

  // removiendo modal
  const removeModal = () => document.body.removeChild(modalContainerEl);

  // tocar afuera
  modalContainerEl.addEventListener("click", (e) => {
    if (e.target === modalContainerEl) removeModal();
  });
  document.getElementById("Btn-modal-instructions").addEventListener("click", () => {
    removeModal();
  });
  // document.getElementById("Btn-close-modal2").addEventListener("click", () => {
  //   removeModal();
  // });
};
// --------------- END MODAL ---------------


// MODALS
// let modalInstrucctions = `
//     <section class="caja">
//         <div class="SubCaja">
//             <p class="content-instruction texto">
//                 Para cruzar el río se puede usar una barca.El granjero hará de
//                 barquero: En la barca sólo cabe el granjero y, o una ave o la cesta de
//                 nueces. También se sabe que, en ausencia del granjero: El halcón se
//                 comería al loro si están ambos en la misma orilla. El loro se comería
//                 las nueces si están ambos en la misma orilla.
//             </p>
//             <a id="Btn-modal-instructions" href="/public/html/game.html" class="boton">INICIAR</a>
//         </div>
//     </section>
// `;

// let modalLost = `
//   <section class="caja">
//   <div class="SubCaja">
//     <div class="botones">
//       <a href="#" class="boton">Jugar de Nuevo</a>
//       <a href="#" class="boton">Página Principal </a>
//     </div>
//   </div>
//   </section>
// `;

// let modalFinally = `
//     <div class="final">
//         <img class="img4" src="/public/img/final.jpg" />
//         <div class="centrado">
//             <h3>Resultado</h3>
//         </div>
//         <div class="centrado2">
//             <h3>Tiempo</h3>
//         </div>
//         <div class="text-box">
//             <b>
//             <a href="#" class="btn btn-white btn- animate">
//                 Volver
//             </a>
//             </b>
//         </div>
//     </div>;
// `;