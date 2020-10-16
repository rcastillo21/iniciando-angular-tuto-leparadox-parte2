import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor() { 
    console.log("Componente Header Creadose");

  }

  ngOnInit() {
    console.log("Se Ejecuta despues de que el Componente Header se cree con Exito...!")
  }

  nombre = "Ruben";

  cambiarNombre(){
    this.nombre = "Jhoan";
  }

  cont = 0;

  contarSuma(){
    //this.cont++;
    this.cont += 1;
  }

  arr = [1, 2, 3, 4, 5];

  add(){
    this.arr.push(Math.random());
  }
}
