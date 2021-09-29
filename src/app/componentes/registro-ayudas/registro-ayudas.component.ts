import { Component, OnInit } from '@angular/core';
import { AyudaService } from 'src/app/servicios/ayuda.service';
import { Ayuda } from 'src/app/modelos/ayuda';

@Component({
  selector: 'app-registro-ayudas',
  templateUrl: './registro-ayudas.component.html',
  styleUrls: ['./registro-ayudas.component.css']
})
export class RegistroAyudasComponent implements OnInit {
ayuda!: Ayuda;
  constructor(private ayudaService: AyudaService) { }

  ngOnInit(): void {
    this.ayuda= new Ayuda;
  }
  add(){

    this.ayudaService.post(this.ayuda);
  }
}
