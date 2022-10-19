const path = require('node:path');
const validarPerfil = (req, res, next) => {
    let permiso = req.query.admin
    console.log(permiso)
    if(permiso=='true' || permiso== undefined){
            console.log('Permissions ok ')
            next()
        }else{
            console.log('No tiene permiso de administrador ')
        res.sendFile( path.join(__dirname , '../views/user_prod.html'))    
   
                }

}

const validarDireccion = (req, res, next) => {
    console.log('middleware2 ok')
    if(req.body.direccion){
        console.log('Tiene direccion')
    }else{
        res.status(400).send()
    }

    next()
}

module.exports = { validarPerfil }