
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
      var controlador=false;
      var j=0;
      while(i < this.personas.length && controlador ===false){
        if( this.personas[i].idPersona=== this.persona.idPersona){
          controlador=true;
        }
        i++;
      }
      while(this.ayudas[j].tipoAyuda != this.persona.tipoAyuda){
        j++;
      }
      if(controlador === false){
        if(this.ayudas[j].cantidad>0){
        this.ayudaService.RestarExist(this.persona.tipoAyuda)
        this.personaService.post(this.persona);
        }else alert('No hay existencias de esa ayuda');

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
