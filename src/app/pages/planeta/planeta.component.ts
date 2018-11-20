import { NgxLoadingModule } from 'ngx-loading';

import { Component, OnInit } from '@angular/core';
import {PlanetasService} from '../../services/planetas.service'


@Component({
  selector: 'nasa-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {
  listaPlanetas: any []
  public loading = false;
  constructor(private planetaService: PlanetasService) { }

  ngOnInit() {
    this.loading = true;
    this.getList()
    }

  excluir(id: number){
    this.planetaService.delete(id).subscribe(
      retorno => {
        this.getList()
      }
    )
  }

  getList(){
    console.log("estouaqui")
    this.planetaService.getList().subscribe(
      retorno => {
        this.listaPlanetas = retorno
        this.loading = false;
      //  this.listaPlanetas.sort(predicateBy("nome"))
      }
    )
  }
}
