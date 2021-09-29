import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {
persona!: Persona;
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.persona= new Persona;
  }
  add(){

    this.personaService.post(this.persona);
  }

}
