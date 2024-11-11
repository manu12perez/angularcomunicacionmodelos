export class Producto {
    //PARA QUE LAS PROPIEDADES SEAN ACCESIBLES, NECESITAMOS      
    //QUE SEAN public     
    public nombre: string;
    public imagen: string;
    public precio: number;

    //TENDREMOS UN CONSTRUCTOR PARA RECIBIR LOS DATOS     
    constructor(name: string, image: string, price: number) {
        this.nombre = name;
        this.imagen = image;
        this.precio = price;
    }
} 


//OTRA SINTAXIS

// export class Producto {
//     constructor(
//         public nombre: string,
//         public imagen: string,
//         public precio: number,
//     ) { }
// }