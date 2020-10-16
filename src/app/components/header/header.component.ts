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

}
