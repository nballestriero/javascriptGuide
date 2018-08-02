import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminPageComponent } from "./admin-page.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppNavbarComponent } from "./app-navbar/app-navbar.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule    
  ],
  exports: [],
  declarations: [AdminPageComponent, DashboardComponent, AppNavbarComponent]
})
export class AdminPageModule { }
