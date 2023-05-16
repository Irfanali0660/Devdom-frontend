import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const material=[
  MatSnackBarModule,
  MatChipsModule,
  MatSelectModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatIconModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [],
  imports:[CommonModule,material],
  exports:[material]
})
export class MaterialModule { }
