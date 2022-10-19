const { Router } = require('express');
const routProductos = Router()
const producto = require('../controllers/producto')
const {validarPerfil} = require('../middlewares/permiso')
const path = require('node:path');
const productos = []
  

routProductos.get('/',validarPerfil, (req,res) => {
    if  (req.query.admin == 'true'){
    res.sendFile( path.join(__dirname , '../views/admin_prod.html'))
    }else{

    res.json(productos[req.query.id])

}})


routProductos.post('/', (req,res) => {
   // let permiso = 
    console.log(req)
    //if (permiso){
    let  { nombre , descripcion, codigo,foto,precio,stock} = req.body 
    let id = productos.length
    const p = new producto(id , nombre , descripcion, codigo,foto,precio,stock)
    productos.push(p)
    res.send(p)}
  //  else {alert("no tenes permisos de admin")}
//}
)


routProductos.put('/:id', (req,res) => {
    productos.push(req.body)
    res.json(req.body)
})

routProductos.delete('/:id', (req,res) => {
    productos.push(req.body)
    res.json(req.body)
})


module.exports = routProductos