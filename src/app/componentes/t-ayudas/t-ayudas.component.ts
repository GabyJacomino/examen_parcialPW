import { Component, OnInit } from '@angular/core';
import { Ayuda } from 'src/app/modelos/ayuda';
import { AyudaService } from 'src/app/servicios/ayuda.service';

@Component({
  selector: 'app-t-ayudas',
  templateUrl: './t-ayudas.component.html',
  styleUrls: ['./t-ayudas.component.css']
})
export class TAyudasComponent implements OnInit {
ayudas!: Ayuda[];
  constructor(private ayudaService: AyudaService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.ayudas= this.ayudaService.get();
  }
  }
