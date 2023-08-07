import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [DoctorsComponent,DialogueComponent],
  exports: [DoctorsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class DoctorsModule { }
