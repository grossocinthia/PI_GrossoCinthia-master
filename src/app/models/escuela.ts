export class Escuela {
    
    id?: number;
    institucion: string;
    comienzo: string;
    imagen: string;
    fin: string;
    titulo: string;
    estado: string;
   

    constructor(institucion: string, titulo: string, comienzo: string, imagen: string, fin: string, estado:string){
   
        this.institucion = institucion;
        this.titulo = titulo;
        this.comienzo = comienzo;
        this.fin = fin;
        this.estado = estado;
        this.imagen = imagen;
        
    }

}

