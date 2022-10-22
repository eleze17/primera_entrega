import { Router } from "express"
import { cartControllers } from "../controllers/carrito.js"
import ValidarPerfil from '../controllers/permiso.js'

const cartRouter = Router()


cartRouter.post('/', ValidarPerfil,(req,res)=>{

cartControllers.saveCart(req,res)})

cartRouter.delete('/:id',ValidarPerfil,(req,res)=>{

cartControllers.deleteCartById(req,res)})

cartRouter.get('/:id/productos', cartControllers.getProductsFromCart)

cartRouter.post('/:id/productos', ValidarPerfil,(req,res)=>{
cartControllers.saveProductInCartByID(req,res)})

cartRouter.delete('/:id/productos/:id_prod', ValidarPerfil,(req,res)=>{


cartControllers.deleteProductFromCartByID(req,res)})

export default cartRouter