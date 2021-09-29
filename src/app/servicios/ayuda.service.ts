import { Injectable } from '@angular/core';
import { Ayuda } from '../modelos/ayuda';

@Injectable({
  providedIn: 'root'
})
export class AyudaService {

  constructor() { }
  get(): Ayuda[] {
    return JSON.parse(localStorage.getItem('ayuda')||'[]');
    }
    post(ayuda: Ayuda) {
    let ayudas: Ayuda[] = [];
    if (this.get() != null) {
    ayudas = this.get();
    }
    ayudas.push(ayuda);
    localStorage.setItem('ayudas', JSON.stringify(ayudas));
    }
    clear(){
      localStorage.removeItem('ayudas')
    }
    RestarExist(tipoAyuda: string){
      let ayudas: Ayuda[]=[];
      if (this.get() != null){
        ayudas= this.get();
      }
      var i =0;
      while(ayudas[i].tipoAyuda!= tipoAyuda){
        i++;
      }
      ayudas[i].cantidad--;
      localStorage.setItem('ayudas',JSON.stringify(ayudas));
    }

}
