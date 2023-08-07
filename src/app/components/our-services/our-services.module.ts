import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from './our-services.component';

const routes: Routes = [
  {
     path: '',  
      component:OurServicesComponent 
    }
];

@NgModule({
  declarations: [
    OurServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OurServicesModule { }
