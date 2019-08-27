import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular 8"];
  mostrarCurso: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  onMostrarCursos(){
    this.mostrarCurso = !this.mostrarCurso;
  }
}
