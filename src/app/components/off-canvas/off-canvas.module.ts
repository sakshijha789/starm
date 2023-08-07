import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffCanvasComponent } from './off-canvas.component';



@NgModule({
  declarations: [
    OffCanvasComponent
  ],
  exports: [
    OffCanvasComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class OffCanvasModule { }
