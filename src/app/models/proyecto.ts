export class Proyecto {
    id?: number;
    tituloProy: string;
    descripcion: string;
    imagenProy: string;
    link: string;
    
   

    constructor(tituloProy: string, descripcion: string, link: string, imagenProy: string){
   
        this.tituloProy = tituloProy;
        this.descripcion = descripcion;
        this.link = link;
        this.imagenProy = imagenProy;
}
}