import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  text1 = "";
  number1 = 0;

  opciones = "";
  valor:String ="";

  Select(){
    this.opciones =  (<HTMLSelectElement>document.getElementById('opciones')).value;
    this.valor = this.opciones;

  }
}
