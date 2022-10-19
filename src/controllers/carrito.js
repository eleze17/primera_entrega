class carrito {
    constructor(id,productos){
     this.id = id,
     this.timestampCarr= Date.now(),
     this.productos= productos,
     this.carritos = []
    }
    

    quitarProd(id){
        let indice =this.id.indexOf(el =>el.id ==id )
        productos.splice(indice,1) 
    }
    
    
    quitarCarr(id){
        let indice =carritos.indexOf(el =>el.id ==id )
        carritos.splice(indice,1) 
    }


    
}

module.exports = carrito