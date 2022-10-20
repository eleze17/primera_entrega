import { Router } from "express"
import { productsController } from "../controllers/producto.js"
import ValidarPerfil from '../controllers/permiso.js'
const productsRouter = Router()

productsRouter.get('/:id?', productsController.getProductById)

productsRouter.post('/',ValidarPerfil, (req,res)=>{

    productsController.saveProduct(req,res)
})


productsRouter.put('/',ValidarPerfil,(req,res)=>{

    productsController.updateProductByID(req,res)

} )


productsRouter.delete('/',ValidarPerfil,(req,res)=>{
productsController.deleteProductById(req,res)
} )

export default productsRouter