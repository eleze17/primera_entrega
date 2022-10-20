const ValidarPerfil = (req, res, next) => {
    let permiso = req.body.admin
    console.log(permiso)
    if(permiso=='true'){
            console.log('Permissions ok ')
            next()
        }else{
            console.log('No tiene permiso de administrador ')
            res.status(400).json({ messaje: 'usted no tiene permisos para consultar esta url'})
   
                }

}
export default ValidarPerfil