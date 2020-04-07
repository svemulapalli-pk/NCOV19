import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C19checkModule } from './c19check/c19check.module';
import { C19checkstepsModule } from './c19checksteps/c19checksteps.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    C19checkModule,
    C19checkstepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
