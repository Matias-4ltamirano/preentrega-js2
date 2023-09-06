

class producto{
    constructor( nombre , stock , precio){
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }

    get_datos(){
        console.log("---PRODUCTO---");
        console.log("Nombre: ", this.nombre);
        console.log("Stock: ", this.stock);
        console.log("Precio: ", this.precio);
        console.log("");
    }

    get_stock(){
        if( this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }

    update_stock( unidades){
        if(this.stock >= unidades){
            this.stock = this.stock - unidades;
            return true
        }
        else{
            console.log("Cantidad solicitada no disponible");
            console.log("Stock disponible: ", this.stock);
            return false
        }
    }
}



// Alta de productos

let listaproductos = [];

listaproductos.push(new producto("felipe rutini", 6 , 9700));
listaproductos.push(new producto("catena zapata", 5 , 6000));
listaproductos.push(new producto("luigi bosca ", 6 , 4500));
listaproductos.push(new producto("trumpeter", 6 , 3100));

//Fin de Alta de productos

console.log("LISTA DE VINOS");

//Inicio del render de vinos
for( let producto of listaproductos){
    producto.get_datos();
}
//Fin del render

//SIMULACION DE COMPRA DEL USUARIO

function buscarVino( producto ){
    return producto.nombre == compraUsuario
}

let compraUsuario = "";

while( compraUsuario != "FIN"){
    compraUsuario = prompt("Ingrese el nombre del vino que desea comprar");

    if(compraUsuario != "FIN"){

        let resultado_find = listaproductos.find( buscarVino );

        if(resultado_find != undefined){
            
            if(resultado_find.get_stock()){
                //Hay stock
                let unidades = parseInt(prompt("Cuantas unidades quiere?"));
                if(resultado_find.update_stock(unidades)){
                    console.log("Gracias por su compra Esperamos que lo disfrute!");
                    for( let producto of listaproductos ){
                        if(producto.stock > 0){
                            producto.get_datos();
                        }
                    }
                }
            }
            else{
                console.log("Producto no encontrado: ", compraUsuario);
            }
        }
    }
}