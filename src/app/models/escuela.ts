export class Escuela {
    
    id?: number;
    institucion: string;
    comienzoEd: string;
    imagenEd: string;
    finEd: string;
    titulo: string;
    estado: string;
   

    constructor(institucion: string, titulo: string, comienzoEd: string, imagenEd: string, finEd: string, estado:string){
   
        this.institucion = institucion;
        this.titulo = titulo;
        this.comienzoEd = comienzoEd;
        this.finEd = finEd;
        this.estado = estado;
        this.imagenEd = imagenEd;
        
    }

}

