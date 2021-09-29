import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
  get(): Persona[] {
    return JSON.parse(localStorage.getItem('persona')||'[]');
    }
    post(persona: Persona) {
    let personas: Persona[] = [];
    if (this.get() != null) {
    personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('persona', JSON.stringify(personas));
    }
    clear(){
      localStorage.removeItem('persona')
    }
}
