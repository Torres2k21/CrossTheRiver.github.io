// const items = document.getElementById('items')
const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
// let carrito= {}
let carrito= JSON.parse(localStorage.getItem('carrito')) ?? {};

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener('DOMContentLoaded', () => { 
    fetchData()
    cambiarNumero();
    // if (localStorage.getItem('carrito')) {
    //     carrito = JSON.parse(localStorage.getItem('carrito'))
    //     // onLoadCartNumbers();
    //     // cartNumbers();
    //     pintarCarrito()
    // }
});
cards.addEventListener('click', e => { addCarrito(e) });


// Traer productos
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json()
        // console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log("error");
    }
}

// Pintar productos
const pintarCards = data => {
    // console.log(data)
    data.forEach(item => {
        templateCard.querySelector('h4').textContent = item.title
        templateCard.querySelector('h5').textContent = item.precio
        templateCard.querySelector('p').textContent = item.descripcion
        templateCard.querySelector('button').dataset.id = item.id
        templateCard.querySelector('img').setAttribute("src", item.thumbnailUrl)
        // templateCard.querySelector('')

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

// Agregar al carrito
const addCarrito = e => {
    if (e.target.classList.contains('btn-add-product')) {
        // console.log(e.target.dataset.id)
        // console.log(e.target.parentElement)
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
    cambiarNumero();
}

// set carrito - establecer carrito
const setCarrito = item => {
    console.log(item)
    const producto = {
        title: item.querySelector('h4').textContent,
        precio: item.querySelector('h5').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    // console.log(producto)  --CANTIDAD
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id] = { ...producto }
    localStorage.setItem('carrito', JSON.stringify(carrito))

    let nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    localStorage.setItem('ProductosAll', nCantidad);
}