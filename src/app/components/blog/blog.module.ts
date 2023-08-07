import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { blogComponent } from './blog.component';

const routes: Routes = [
  {
     path: '',  
      component:blogComponent 
    }
];

@NgModule({
  declarations: [
    blogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
