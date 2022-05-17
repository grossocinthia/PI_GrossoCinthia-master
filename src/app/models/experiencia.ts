export class Experiencia {
     
    id?: number;
    empresa: string;
    comienzoEx: string;
    imagenEx: string;
    finEx: string;
    posicion: string;
    tipoEmpleo: string;
   

    constructor(empresa: string, posicion: string, comienzoEx: string, imagenEx: string, finEx: string, tipoEmpleo:string){
   
        this.empresa = empresa;
        this.posicion = posicion;
        this.comienzoEx = comienzoEx;
        this.finEx = finEx;
        this.tipoEmpleo = tipoEmpleo;
        this.imagenEx = imagenEx;
        
}
}
