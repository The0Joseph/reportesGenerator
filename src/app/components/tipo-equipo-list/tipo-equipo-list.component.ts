import { Component, OnInit } from '@angular/core';
import { TipoEquipo } from '../../tipo-equipo';
import { TipoEquipoService } from '../../service/tipo-equipo.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tipo-equipo-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tipo-equipo-list.component.html',
  styleUrl: './tipo-equipo-list.component.css'
})
export class TipoEquipoListComponent implements OnInit{

  tipoEquipos: TipoEquipo [] = []

  constructor(private tipoEquipoService: TipoEquipoService){

  }

  ngOnInit():void{
    this.listTipoEquipo();
  }

  listTipoEquipo(){
    this.tipoEquipoService.getTipoEquipo().subscribe(
      data => {
        this.tipoEquipos = data;
        console.log(this.tipoEquipos);
      }
    );
  }

  eliminarTipoEquipo(id:number){
    
    this.tipoEquipoService.deleteTipoEquipo(id).subscribe(
      () => {
        this.listTipoEquipo()
      }
    );
    
  }

}
