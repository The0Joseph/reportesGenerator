import { Component, OnInit } from '@angular/core';
import { TipoEquipo } from '../../tipo-equipo';
import { FormsModule } from '@angular/forms';
import { TipoEquipoService } from '../../service/tipo-equipo.service';

@Component({
  selector: 'app-tipo-equipo-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tipo-equipo-add.component.html',
  styleUrl: './tipo-equipo-add.component.css'
})
export class TipoEquipoAddComponent implements OnInit{

  nuevoObjecto: TipoEquipo = new TipoEquipo();

  constructor(private tipoEquipoService: TipoEquipoService ){

  }

  ngOnInit():void{
  }

  addTipoEquipo(){
    // let tipoEquipo = new TipoEquipo();
    console.log(this.nuevoObjecto)

    
    this.tipoEquipoService.createTipoEquipo(this.nuevoObjecto).subscribe(  () => {
      this.nuevoObjecto = new TipoEquipo();
    });
  }
}
