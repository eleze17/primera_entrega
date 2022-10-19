class producto {
    constructor(id,nombre,descripcion,codigo,foto,precio,stock){
     this.id = id,
     this.timestampProd= Date.now(),
     this.nombre= nombre,
     this.descripcion= descripcion,
     this.codigo= codigo,
     this.foto= foto,
     this.precio= precio,
     this.stock= stock
     
    }
    

    quitarProd(id){
        let indice =this.productos.indexOf(el =>el.id ==id )
        this.productos.splice(indice,1) 
    }

    
    getProdId(id){
        let indice =this.productos.indexOf(el =>el.id ==id )
        return this.productos[indice]
    }
    
    getAll(){
        return this.productos.splice()
    }
    
    /*quitarCarr(id){
        let indice =carritos.indexOf(el =>el.id ==id )
        carritos.splice(indice,1) 
    }*/


    
}

module.exports = producto