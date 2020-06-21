export class Palabra {

    id:number;
    nombreIngles:string;
    nombreEspaniol:string;
    urlImagen:string;

    constructor(id?:number,nombreIngles?:string,nombreEspaniol?:string,urlImagen?:string){
        this.id=id;
        this.nombreIngles=nombreIngles;
        this.nombreEspaniol=nombreEspaniol;
        this.urlImagen=urlImagen;
    }
}
