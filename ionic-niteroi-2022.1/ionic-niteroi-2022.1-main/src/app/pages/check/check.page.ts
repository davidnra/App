import { Component, OnInit } from '@angular/core';
import { Mes } from './check.model';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  meses: Mes[] = [
    {descricao: 'janeiro', status:false},
    {descricao: 'fevereiro', status:false},
    {descricao: 'março', status:false},
    {descricao: 'abril', status:true},
    {descricao: 'maio', status:false},
    {descricao: 'junho', status:false},
    {descricao: 'julho', status:true},
    {descricao: 'agousto', status:false},
    {descricao: 'setembro', status:false},
    {descricao: 'outubro', status:false},
    {descricao: 'novembro', status:false},
    {descricao: 'dezembro', status:false},
  ];

  constructor() { }

  ngOnInit() {
    for (const mes of this.meses) {
      if (mes.status) {
       
        console.log(mes.descricao);
      }
    }

  }

}
