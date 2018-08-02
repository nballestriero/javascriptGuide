import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
                            {   path: "",
                                component: AdminPageComponent,
                                children:[ 
                                           {
                                               path: "dashboard",
                                               component: DashboardComponent
                                           },
                                           {
                                               path: "",
                                               redirectTo: "dashboard"
                                               
                                           },
                                         ]
                            },
                       ]

@NgModule({
    imports: [
              RouterModule.forChild(routes)
             ],
    exports: [RouterModule],
    providers: []
})

export class AdminRoutingModule{}