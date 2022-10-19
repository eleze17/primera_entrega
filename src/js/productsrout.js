const formProducto = document.getElementById('form-buscar')
formProducto.addEventListener('submit', e => {
    e.preventDefault()

let buscado = document.getElementById('buscar').value
console.log(buscado)
})

