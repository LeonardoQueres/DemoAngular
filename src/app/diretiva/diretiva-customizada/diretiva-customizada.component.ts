import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizada',
  templateUrl: './diretiva-customizada.component.html',
  styleUrls: ['./diretiva-customizada.component.css']
})
export class DiretivaCustomizadaComponent implements OnInit {

  mostrarCursos: boolean;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;    
  }
}
