function Producto(codigo, marca, tipo, peso, precio){
    this.codigo = codigo;
    this.marca = marca;
    this.tipo = tipo;
    this.peso = peso;
    this.precio = precio;
    this.describir = () => (console.log(this.codigo + " - " + this.marca +" "+ this.tipo +" ("+ this.peso +"gr) ---> $"+ this.precio));
    this.cambiarPrecio = (nuevoPrecio) => (this.precio = nuevoPrecio);
}

const productos=[
    // new Producto(1, "La Paulina", "Queso Cremoso tradicional", 100, 86.3),
    // new Producto(2, "La Paulina", "Queso Port Salud tradicional", 100, 98.2),
    // new Producto(3, "La Paulina", "Queso Reggianito", 100, 212.7),
    // new Producto(4, "La Paulina", "Queso Crema", 100, 78.1),
    // new Producto(5, "Paladini", "Mortadela", 100, 82.8),
    // new Producto(6, "Paladini", "Jamon Cocido", 100, 126.1),
    // new Producto(7, "Paladini", "Bondiola", 100, 213.2),
    // new Producto(8, "Paladini", "Salame Milan", 100, 156.7),
    // new Producto(9, "Paladini", "Queso Cremoso", 100, 97.5),
    // new Producto(10, "Paladini", "Queso Reggianito", 100, 191.9),
    // new Producto(11, "Paladini", "Queso Danbo", 100, 108.7)
];

//Agregando productos basicos
let newProducto = new Producto(1, "La Paulina", "Queso Cremoso tradicional", 100, 86.3)
productos.push(newProducto);
newProducto = new Producto(2, "La Paulina", "Queso Reggianito", 100, 212.7);
productos.push(newProducto);
newProducto = new Producto(3, "La Paulina", "Queso Crema", 100, 78.1);
productos.push(newProducto);
newProducto = new Producto(4, "Paladini", "Mortadela", 100, 82.8);
productos.push(newProducto);
newProducto = new Producto(5, "Paladini", "Jamon Cocido", 100, 126.1);
productos.push(newProducto);
newProducto = new Producto(6, "Paladini", "Bondiola", 100, 213.2);
productos.push(newProducto);
newProducto = new Producto(7, "Paladini", "Salame Milan", 100, 156.7);
productos.push(newProducto);
newProducto = new Producto(8, "Paladini", "Queso Cremoso", 100, 97.5);
productos.push(newProducto);
newProducto = new Producto(9, "Paladini", "Queso Reggianito", 100, 191.9);
productos.push(newProducto);
newProducto = new Producto(10, "Paladini", "Queso Danbo", 100, 108.7);
productos.push(newProducto);

function carrito(){
    let carrito = 0;
    let x;
    let c;
    listprodcutos();
    x = option();
    checkOption(x);
    while(x != "S"){
        c = cantidad();
        carrito += (parseFloat(productos[x-1].precio) / parseFloat(productos[x-1].peso)) * parseFloat(c);
        console.log("Su subtotal es de: $", carrito);
        console.clear();
        listprodcutos();
        console.log("Su subtotal es de: $", carrito);
        x = option();
        checkOption(x);
    }
    console.log('Su total es de: $', carrito);
}

function cantidad(){
    let c = prompt("¿Cuánto desea? (en gramos)");
    return c;
}

function option(){
    let x;
    x = prompt('¿Qué desea agregar al carrito? (1 al ' + productos.length + ', S para salir)');
    return x;
}

function checkOption(x){
    while(x != "S" && (parseInt(x) > produtos.length || parseInt(x) < 1)){
        alert('Valor incorrecto');
        x = option();
    }
    return x;
}

//Funcion para recorrer la funcion descirbir en cada producto
function listprodcutos(){
    productos.forEach(
        function callback(v , i){ //usado para atrapar el 2do valor que envia el forEach (index)
            productos[i].describir();
        }
    );
}

carrito();