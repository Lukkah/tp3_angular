import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-venta-pasaje',
  templateUrl: './venta-pasaje.component.html',
  styleUrls: ['./venta-pasaje.component.css']
})
export class VentaPasajeComponent implements OnInit {
  
  pasaje:Pasaje;
  pasajes: Array<Pasaje>;
  precioDescuento:number=0;
  precioActual:number=0;
  
  cantAdulto:number=0;
  cantNinio:number=0;
  cantJubilado:number=0;

  mostrar:boolean=false;
  constructor(private ventaService?: VentasService) {
      this.pasaje= new Pasaje();
      this.pasajes= new Array<Pasaje>();
      this.listarVenta();
  }
  ngOnInit(): void {
  }
  public guardarVenta(){
    this.pasaje.fechaCompra=new Date();
    this.ventaService.guardarVenta(this.pasaje);
    this.contarResumen(this.pasaje.categoriaPasajero);
    this.pasaje=new Pasaje();
    this.mostrar=false;
    this.precioActual=0;
    this.precioDescuento=0;
  }
  public listarVenta(){
    this.pasajes=this.ventaService.listarVenta();
  }
  public limpiarVenta(){
     this.pasaje=new Pasaje();
  }


  public calcularDescuento(){
    if(this.pasaje.categoriaPasajero=='m'){
      this.precioDescuento=(this.pasaje.precio*25)/100
      this.precioActual=this.pasaje.precio-this.precioDescuento;
      this.mostrar=true;
    }else if(this.pasaje.categoriaPasajero=='j'){
      this.precioDescuento=(this.pasaje.precio*50)/100
      this.precioActual=this.pasaje.precio-this.precioDescuento;
      this.mostrar=true;
    }
  }

  public contarResumen(pasajero:string){
    if(pasajero=='a'){
      this.cantAdulto=this.cantAdulto+1;
    }else if(pasajero=='m'){
      this.cantNinio=this.cantNinio+1;
    }
    else if(pasajero=='j'){
      this.cantJubilado=this.cantJubilado+1;
    }
  }
}
