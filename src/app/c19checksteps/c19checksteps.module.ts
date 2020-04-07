import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C19checkstepsRoutingModule } from './c19checksteps-routing.module';
import { GetStratedComponent } from './get-strated/get-strated.component';


@NgModule({
  declarations: [GetStratedComponent],
  imports: [
    CommonModule,
    C19checkstepsRoutingModule
  ]
})
export class C19checkstepsModule { }
