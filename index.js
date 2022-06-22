function Producto(codigo, marca, tipo, peso, precio){
    this.codigo = codigo;
    this.marca = marca;
    this.tipo = tipo;
    this.peso = peso;
    this.precio = precio;
    this.describir = () => (console.log(this.codigo + " - " + this.marca +" "+ this.tipo +" ("+ this.peso +"gr) ---> $"+ this.precio));
    this.cambiarPrecio = (nuevoPrecio) => (this.precio = nuevoPrecio);
}

let productos=[
    new Producto(1, "La Paulina", "Queso Cremoso tradicional", 100, 86.3),
    new Producto(2, "La Paulina", "Queso Port Salud tradicional", 100, 98.2),
    new Producto(3, "La Paulina", "Queso Reggianito", 100, 212.7),
    new Producto(4, "La Paulina", "Queso Crema", 100, 78.1),
    new Producto(5, "Paladini", "Mortadela", 100, 82.8),
    new Producto(6, "Paladini", "Jamon Cocido", 100, 126.1),
    new Producto(7, "Paladini", "Bondiola", 100, 213.2),
    new Producto(8, "Paladini", "Salame Milan", 100, 156.7),
    new Producto(9, "Paladini", "Queso Cremoso", 100, 97.5),
    new Producto(10, "Paladini", "Queso Reggianito", 100, 191.9),
    new Producto(11, "Paladini", "Queso Danbo", 100, 108.7)
];

function carrito(){
    let carrito;
    let x;
    listprodcutos();
    x = option();
    console.log(x);
    checkOption(x);
    
}

function option(){
    let x;
    x = prompt('¿Qué desea agregar al carrito? (1 al 11, S para salir)');
    return x;
}

function checkOption(x){
    while(x != "S" && (parseInt(x) > 11 || parseInt(x) < 1)){
        alert('Valor incorrecto');
        x = option();
    }
    return x;
}

function listprodcutos(){
    for (let i=0; i<11; i++){
        productos[i].describir()
    }
}

carrito();