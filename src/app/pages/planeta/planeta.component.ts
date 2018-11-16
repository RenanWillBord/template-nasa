import { Component, OnInit } from '@angular/core';

import {PlanetasService} from '../../services/planetas.service'


@Component({
  selector: 'nasa-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {
  listaPlanetas: any []
  constructor(private planetaService: PlanetasService) { }

  ngOnInit() {
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
    this.planetaService.getList().subscribe(
      retorno => {
        this.listaPlanetas = retorno
      //  this.listaPlanetas.sort(predicateBy("nome"))
      }
    )
  }
}
