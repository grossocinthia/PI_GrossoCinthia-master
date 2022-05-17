export class Experiencia {
     
    id?: number;
    empresa: string;
    comienzo: string;
    imagen: string;
    fin: string;
    posicion: string;
    tipoEmpleo: string;
   

    constructor(empresa: string, posicion: string, comienzo: string, imagen: string, fin: string, tipoEmpleo:string){
   
        this.empresa = empresa;
        this.posicion = posicion;
        this.comienzo = comienzo;
        this.fin = fin;
        this.tipoEmpleo = tipoEmpleo;
        this.imagen = imagen;
        
}
}
