import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Botão', url: 'botao', icon: 'browsers' },
    { title: 'Navegação', url: 'navegacao', icon: 'boat'},
    { title: 'Alerta', url: 'alerta', icon: 'chatbox'},
    { title: 'Menu de Contexto', url: 'acao', icon: 'share'},
    { title: 'Badge', url: 'badge', icon: 'notifications'},
    { title: 'Check', url: 'check', icon: 'bag-check'},
    { title: 'Interacao', url: 'conteudo', icon: 'layers'},
    { title: 'Chip', url: 'chip', icon: 'hardware-chip'},
    { title: 'Data', url: 'data', icon: 'calendar-number'}
    
  ];

  constructor(private nav: NavController) {}

  irParaHome(){
    this.nav.navigateForward('home');
  } 
}
