import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DoctorsModule } from '../doctors/doctors.module';
import { ObesityListComponent } from './obesity-list/obesity-list.component';
import { BookDialogueComponent } from './book-dialogue/book-dialogue.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
     path: '',  
      component:HomeComponent 
    }
];

@NgModule({
  declarations: [
    HomeComponent,
    ObesityListComponent,
    BookDialogueComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    DoctorsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
