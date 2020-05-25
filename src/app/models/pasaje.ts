export class Pasaje {
    dniPasajero:string;
    precio:number;
    categoriaPasajero:string;
    fechaCompra:Date;

    pasajero(dniPasajero?:string,precio?:number,categoriaPasajero?:string,fechaCompra?:Date){
        this.dniPasajero=dniPasajero;
        this.precio=precio;
        this.categoriaPasajero=categoriaPasajero;
        this.fechaCompra=fechaCompra;
    }
}
