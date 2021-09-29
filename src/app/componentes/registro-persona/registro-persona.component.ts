import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Ayuda } from 'src/app/modelos/ayuda';
import { Persona } from 'src/app/modelos/persona';
import { AyudaService } from 'src/app/servicios/ayuda.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {
persona!: Persona;
ayudas!: Ayuda[];
personas!:Persona[];

  constructor(private personaService:PersonaService, private ayudaService: AyudaService) { }

  ngOnInit(): void {
    this.persona= new Persona;
    this.personas=this.personaService.get();
    this.ayudas= this.ayudaService.get();
  }
  add(){
    if(this.persona.idPersona !=null && this.persona.nombre !=null && this.persona.tipoAyuda !=null){
      var i =0;
      var controlador=true;
      while(i < this.personas.length && this.personas[i].nombre != this.persona.nombre){
        i++;
        if(i ===this.personas.length){
          controlador=false;
        }
      }
      if(controlador === false){
        this.personaService.post(this.persona);
      } else{
        alert(' Ya esta persona recibio una ayuda')
      }
    }else{
      alert('Llene todos los campos');
    }

  }
  clear(){
    this.personaService.clear();
  }

}
