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
