import { Component, OnInit } from '@angular/core';
import { AeronaveService } from '../../services/aeronave.service'
import { ModeloService } from 'src/services/modelo.service';
import { Observable } from 'rxjs';
import { Modelo } from 'src/interfaces/modelo';
import { Aeronave } from 'src/interfaces/aeronave';

@Component({
  selector: 'app-cadastro-aeronave',
  templateUrl: './cadastro-aeronave.component.html',
  styleUrls: ['./cadastro-aeronave.component.css']
})
export class CadastroAeronaveComponent implements OnInit {

  constructor(private aeronaveService: AeronaveService, private modeloService: ModeloService) { }

  public PREFIX: string;
  public MAX_DEPARTURE_WEIGHT: string;
  public MAX_LANDING_WEIGHT: string;
  public ACTIVE: boolean;

  public todosModelos: Observable<Modelo[]>
  public modelos: Modelo[]

  onSubmit() {

  }

  ngOnInit() {
    this.todosModelos = this.modeloService.getModelos();
    this.todosModelos.subscribe((result) => {
      console.log(result);
    })
  }

}
