import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { MatCardLgImage } from '@angular/material/card';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss'],

})
export class BmiCalculatorComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  submitForm = new FormGroup({
    feet: new FormControl(0,[Validators.required]),
    in: new FormControl(0,[Validators.required]),
    lbs: new FormControl(0,[Validators.required]),
    cm: new FormControl(0,[Validators.required]),
    kg: new FormControl(0,[Validators.required])
  })

  
  get feet(){
    return this.submitForm.get('feet');
  }
  get in(){
    return this.submitForm.get('in');
  }
  get lbs(){
    return this.submitForm.get('lbs');
  }
  get cm(){
    return this.submitForm.get('cm');
  }
  get kg(){
    return this.submitForm.get('kg');
  }


  reset(){
    this.submitForm.reset();
  };

  metricBmi:any;
  metriccalculate(){
   let height:any=this.submitForm.value.cm;
   let wt:any= this.submitForm.value.kg;
   this.metricBmi = wt/height;
  };

  imperialBmi:any;
  imperialcalculate(){
    let feet:any=this.submitForm.value.feet;
    let feetin:any=this.submitForm.value.in;
    let lbs:any=this.submitForm.value.lbs;
    this.imperialBmi = (feet+feetin)/lbs;
  }
}
