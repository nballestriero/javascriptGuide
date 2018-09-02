import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule,
         MatNativeDateModule,
         MatSidenavModule, 
         MatToolbarModule, 
         MatListModule,
         MatTabsModule,
         MatCardModule,
         MatSelectModule,
         MatProgressSpinnerModule,
         MatDialogModule,
         MatTableModule} from '@angular/material';


@NgModule({
    
    imports: [MatButtonModule, 
              MatIconModule, 
              MatInputModule, 
              MatFormFieldModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCheckboxModule,
              MatSidenavModule,
              MatToolbarModule,
              MatListModule,
              MatTabsModule,
              MatCardModule,
              MatSelectModule,
              MatProgressSpinnerModule,
              MatDialogModule,
              MatTableModule],
              
    exports: [MatButtonModule,
              MatIconModule,
              MatInputModule,
              MatFormFieldModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCheckboxModule,
              MatSidenavModule,
              MatToolbarModule,
              MatListModule,
              MatTabsModule,
              MatCardModule,
              MatSelectModule,
              MatProgressSpinnerModule,
              MatDialogModule,
              MatTableModule]
    
})
export class MaterialModule{}