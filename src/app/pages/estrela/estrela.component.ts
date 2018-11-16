import { Component, OnInit } from '@angular/core';

import {EstrelasService} from '../../services/estrelas.service'

@Component({
  selector: 'nasa-estrela',
  templateUrl: './estrela.component.html',
  styleUrls: ['./estrela.component.css']
})


export class EstrelaComponent implements OnInit {
  listaEstrelas: any = []

  constructor(private estrelaService: EstrelasService) { }


  ngOnInit(){
      this.getList()

    }

  excluir(id: number){
    this.estrelaService.delete(id).subscribe(
      retorno => {
        this.getList()
      }
    )
  }

  getList(){
    this.estrelaService.getList().subscribe(
      retorno => {
        this.listaEstrelas = retorno
      }
    )
  }
}
