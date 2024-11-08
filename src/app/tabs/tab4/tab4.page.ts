import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.recargarPartida();        
      },
    },
  ];
  
  numeroAleatorio !:number;
  numeroIntroducido: number = 0;
  texto: string = "";
  contador: number = 0;
 
  constructor() { }
  
  generarNumeroAleatorio() {
  this.numeroAleatorio = Math.floor(Math.random() * 100);
  }

  comprobarNumero() {
    
    if (this.numeroAleatorio>this.numeroIntroducido){
      this.texto = "Introduce un número mayor.";
    } else if (this.numeroAleatorio<this.numeroIntroducido){
        this.texto = "Introduce un número menor.";
      } else if (this.numeroAleatorio==this.numeroIntroducido){
        this.texto = "Enhorabuena!! Has acertado el numero secreto.";
      }
  }
  
  recargarPartida() {
    // Recargar la página actual
    this.contador = 0;
           
  }
  
  onClick() {
    this.comprobarNumero();
    this.contador = this.contador + 1;
  }

  ngOnInit() {
    this.generarNumeroAleatorio();
  }

}