import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablerandomComponent } from './tablerandom/tablerandom.component';
import { RoutesModule } from './routes/routes.module';
import { GatosComponent } from './gatos/gatos.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';
import { InfoLocationComponent } from './info-location/info-location.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TablerandomComponent,
    GatosComponent,
    RickandmortyComponent,
    InfoLocationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RoutesModule,
    NgbModalModule,
    NgbModule
  ],
  entryComponents: [
    InfoLocationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
