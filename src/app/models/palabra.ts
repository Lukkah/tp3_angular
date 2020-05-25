export class Palabra {
    nombreIngles:string;
    nombreEspaniol:string;
    urlImagen:string;

    constructor(nombreIngles?:string,nombreEspaniol?:string,urlImagen?:string){
        this.nombreIngles=nombreIngles;
        this.nombreEspaniol=nombreEspaniol;
        this.urlImagen=urlImagen;
    }
}
