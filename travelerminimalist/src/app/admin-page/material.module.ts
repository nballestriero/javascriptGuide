import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule,MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule,MatIconModule]
})
  export class MaterialModule{}

