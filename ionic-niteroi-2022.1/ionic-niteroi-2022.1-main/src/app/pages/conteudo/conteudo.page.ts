import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
})
export class ConteudoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logarScroollInicio(){
    console.log('Ususaio estar no inicio');
  }
  logarScroollFinal(){
    console.log('Ususaio estar no Final');
  }
}
