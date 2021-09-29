import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-t-persona',
  templateUrl: './t-persona.component.html',
  styleUrls: ['./t-persona.component.css']
})
export class TPersonaComponent implements OnInit {
personas!:Persona[];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.personas= this.personaService.get();
  }

}
