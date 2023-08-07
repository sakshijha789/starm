import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
     path: '',  
      component:BmiCalculatorComponent 
    }
];


@NgModule({
  declarations: [
    BmiCalculatorComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class BmiCalculatorModule {
}
