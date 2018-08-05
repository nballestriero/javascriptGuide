import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatMenuModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule
            ],
  exports: [MatButtonModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatMenuModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule
            ]
})
  export class MaterialModule{}

