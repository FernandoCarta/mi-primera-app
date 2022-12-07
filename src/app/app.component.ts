import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Nombre del componente al que vamos a hacer referencia en los archivos HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-primera-app';
}
