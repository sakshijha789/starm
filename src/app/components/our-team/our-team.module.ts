import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamComponent } from './our-team.component';

import { DoctorsModule } from '../doctors/doctors.module';




const routes: Routes = [
  {
     path: '',  
      component:OurTeamComponent 
    }
];

@NgModule({
  declarations: [
    OurTeamComponent,    
  ],
  imports: [
    CommonModule,
    DoctorsModule,
    RouterModule.forChild(routes)
  ]
})
export class OurTeamModule { }
