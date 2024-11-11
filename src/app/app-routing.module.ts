import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { HomeComponent } from './components/home/home.component';
import { PadreCocheComponent } from './components/padre-coche/padre-coche.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';

const routes: Routes = [
    { path: "", component:HomeComponent},
    { path: "productos", component:ListaProductosComponent},
    { path: "padrecoche", component:PadreCocheComponent},
    { path: "padredeportes", component:PadreDeportesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
