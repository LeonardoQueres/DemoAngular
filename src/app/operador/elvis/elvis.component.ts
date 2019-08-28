import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.css']
})
export class ElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: { nome: 'Leonardo' }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
