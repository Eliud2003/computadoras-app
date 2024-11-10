import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComputadorasComponent } from "./components/lista-computadoras/lista-computadoras.component";
import { Computadora } from '../models/Computadora';
import { ComputadorasjsonService } from './services/computadorasjson.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComputadorasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tarea Angular';
  

}
