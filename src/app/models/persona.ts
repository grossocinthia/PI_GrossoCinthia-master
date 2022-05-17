export class Persona {


        id?: number;
        nombreCompleto: string;
        telefono: string;
    
        constructor(nombreCompleto: string, telefono: string) {
            this.nombreCompleto = nombreCompleto;
            this.telefono = telefono;
        }
    
}
