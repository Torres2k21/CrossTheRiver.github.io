// --------------- MODAL ---------------
// Añadir un Objeto de atributos a un elemento
const addAttributes = (element, attrObj) =>{
  for(let attr in attrObj){
    if(attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
  }
};

// Crear elementos para el modal
const createCustomerElement = (element,attribute,children) =>{
let customElement = document.createElement(element);
if(children!==undefined) children.forEach(el=>{
  if(el.nodeType){
    if(el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
  }else{
    customElement.innerHTML += el;
  }
});
addAttributes(customElement,attribute);
return customElement;
};

// Imprimir modal
const printModal = content=>{
  // creando contenedor interno
  const modalContentEl= createCustomerElement('div', {
    id:'modal-content',
    class:'modal-content'
  }, [content]);

  // creando contenedor principal
  const modalContainerEl = createCustomerElement('div',{
    id:'modal-container',
    class:'modal-container'
  }, [modalContentEl]);

  // imprimir el modal
  document.body.appendChild(modalContainerEl);

  // removiendo modal
  const removeModal = () => document.body.removeChild(modalContainerEl);

  // tocar afuera 
  modalContainerEl.addEventListener('click', e=>{
    if(e.target === modalContainerEl) removeModal();
  })
  document.getElementById('Btn-close-modal1').addEventListener('click', ()=>{
    removeModal();
  })
  document.getElementById('Btn-close-modal2').addEventListener('click', ()=>{
    removeModal();
  })
}
// --------------- FIN DEL MODAL ---------------



// SCROLL Y
// Referencia: http://www.html5rocks.com/en/tutorials/speed/animations/
var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  // Hacer algo con la posición del scroll
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});



// Nav
// const Nav_frag = document.getElementById("Nav-template");
// // creando el template del nav
// let Nav_fragmen = `
//         <!--logo--------------->
//         <a href="/main/index.html" class="logo">
//             <img src="/main/public/img/productos/logo.png">
//         </a>
//         <!--menu-btn-------------->
//             <input class="menu-btn" type="checkbox" id="menu-btn">
//             <label class="menu-icon" for="menu-btn">
//                 <span class="nav-icon"></span>
//             </label>
//         <!--menu-------------->
//         <ul class="menu">
//             <li><a href="/main/public/views/nosotros.html">Nosotros</a></li>	
//             <li><a href="/main/public/views/servicios.html">Servicios</a></li>	
//             <li><a href="/main/public/views/productos.html">Productos</a></li>	
//             <li><a href="/main/public/views/contactanos.html">Contactenos</a></li>	
//             <li><a href="/main/public/views/Proximamente.html">Proximamente</a></li>	
//         </ul>
//         <div class="telefono">
//             <div>
//                 <span class="iconify" data-icon="bi:telephone-fill" style="color: white;"></span>
//             </div>
//             <p class="numero">941 112 191</p>
//             <a href="/e-comerce/e-comerce.html">Comprar</a>
//         </div>
// `;
// Nav_frag.innerHTML = Nav_fragmen;


let form_= `
  <h1> Bienvenidos a los modales </h1>
  <form action="#">
    <label for="#">Ingrese su nombre
        <input type="text" name="nombre" id="Name_">
    </label>
    <input id="Btn-modal" type="submit" value="Enviar">
  </form>
`;

// MODAL
document.getElementById('Btn-modal').addEventListener('click', () =>{
  printModal(form_);
  let algo= document.querySelectorAll('#modal-content');
  console.log(algo);
  // document.querySelectorAll('#modal-content').document.body.classList.toggle('active');
})


// ----- INICO DE MEDIA QUERY -----
const mediumBp = matchMedia('(min-width: 600px)');
const changeSize = mql =>{
  if(mql.matches==true){
    document.body.classList.toggle('rojo');
  } else{
    document.body.classList.toggle('green');
  }
}
// mediumBp.addListener(changeSize);
// changeSize(mediumBp);

// ----- FIN DE MEDIA QUERY EN JS -----

