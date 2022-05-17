export class Proyecto {
    id?: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    link: string;
    
   

    constructor(titulo: string, descripcion: string, link: string, imagen: string){
   
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.link = link;
        this.imagen = imagen;
}
}