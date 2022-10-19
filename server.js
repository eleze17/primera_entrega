const express = require ('express')
const app = express()
const routProductos = require('./src/routes/productosRout')

//app.use('/carrito',routCarrito)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/productos',routProductos)

app.use(express.static('public'));

app.use((req, res) => {
    res.status(404).send({"error":-2,
                        "descripcion": "ruta " + req.url + ' y metodo'  + req.method + ' no implementada'   });
  });

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
