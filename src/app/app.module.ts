import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './components/body/body.component';

/**Begin material angular */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatCardModule} from '@angular/material/card';
/**end material angular */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,BodyComponent]
})
export class AppModule { }
