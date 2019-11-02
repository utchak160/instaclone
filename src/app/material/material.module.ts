import { NgModule } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';

const MaterialComponent = [
  MatSliderModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatCardModule,
];


@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
