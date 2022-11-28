


const cambiarNumero = () => {
    let CartNumero = localStorage.getItem('ProductosAll');
    // console.log(CartNumero);

    document.getElementById('NumberInCart_').textContent = CartNumero;
    console.log(CartNumero);
}

