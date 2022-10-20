import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import productsRouter from './src/routes/productosRout.js'
import cartRouter from './src/routes/carritoRout.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/productos', productsRouter)
app.use('/api/carrito', cartRouter)


const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

export default app