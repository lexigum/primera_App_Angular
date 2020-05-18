import { NgModule } from '@angular/core';
// npm i @angular/router
import { RouterModule } from '@angular/router';
import { TablerandomComponent } from '../tablerandom/tablerandom.component';
import { GatosComponent } from '../gatos/gatos.component';
import { RickandmortyComponent } from '../rickandmorty/rickandmorty.component';

const routes = [
  { path: 'tablerandom', component: TablerandomComponent },
  { path: 'gatos', component: GatosComponent },
  { path: 'rickandmorty', component: RickandmortyComponent},
  { path: '**', redirectTo: 'tablerandom', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule{ }
