import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TipoEquipoListComponent } from './components/tipo-equipo-list/tipo-equipo-list.component';
import { TipoEquipoAddComponent } from './components/tipo-equipo-add/tipo-equipo-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TipoEquipoListComponent, TipoEquipoAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reportesGenerator';
}
