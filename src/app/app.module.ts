import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProvider } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ModelsComponent } from './components/models/models.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HijoCocheComponent } from './components/hijo-coche/hijo-coche.component';
import { PadreCocheComponent } from './components/padre-coche/padre-coche.component';
import { HijoDeporteComponent } from './components/hijo-deporte/hijo-deporte.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    ModelsComponent,
    HomeComponent,
    MenuComponent,
    HijoCocheComponent,
    PadreCocheComponent,
    HijoDeporteComponent,
    PadreDeportesComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
