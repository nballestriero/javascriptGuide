import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminRoutingModule} from "./admin-routing.module";
import { AdminPageComponent } from "./admin-page.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [],
  declarations: [AdminPageComponent]
})
export class AdminPageModule { }
