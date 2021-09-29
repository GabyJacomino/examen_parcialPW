import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { RegistroAyudasComponent } from './componentes/registro-ayudas/registro-ayudas.component';
import { TAyudasComponent } from './componentes/t-ayudas/t-ayudas.component';
import { RegistroPersonaComponent } from './componentes/registro-persona/registro-persona.component';
import { TPersonaComponent } from './componentes/t-persona/t-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegistroAyudasComponent,
    TAyudasComponent,
    RegistroPersonaComponent,
    TPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
