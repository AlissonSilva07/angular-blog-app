import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarItems: string[] = ['Início', 'Blahbs Em Alta', 'Blahbar', 'Sobre'];
}
