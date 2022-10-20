import { Router } from "express"
import { cartControllers } from "../controllers/carrito.js"
import ValidarPerfil from '../controllers/permiso.js'

const cartRouter = Router()


cartRouter.post('/', ValidarPerfil,(req,res)=>{

cartControllers.saveCart(req,res)})

cartRouter.get('/:id', cartControllers.getProductsFromCart)



cartRouter.delete('/', cartControllers.deleteCartById)

cartRouter.get('/:id/productos', cartControllers.getProductsFromCart)

cartRouter.post('/:id/productos', cartControllers.saveProductInCartByID)

cartRouter.delete('/:id/productos/:id_prod', cartControllers.deleteProductFromCartByID)

export default cartRouter