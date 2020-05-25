export class Asistente {
    usuario:string;
    nombreOrganizacion:string;
    solicitaConstancia:boolean;

    Asistente(usuario?:string,nombreOrganizacion?:string,solicitaConstancia?:boolean,fechaAsistencia?:Date){
        this.usuario=usuario;
        this.nombreOrganizacion=nombreOrganizacion;
        this.solicitaConstancia=solicitaConstancia;
    }
}
