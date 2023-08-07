import { Component,Input} from '@angular/core';
import { DialogueComponent } from './dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
 
})
export class DoctorsComponent {

  doctorlist=[
    {name:"Dr. Roy Coleman",position:"Senior Surgeon & Endoscopist",image:"./assets/images/doctor.png"},
    {name:"Dr. Abrahm",position:"Senior Surgeon & Endoscopist",image:"./assets/images/doctor.png"},
    {name:"Dr. Riya",position:"Senior Surgeon & Endoscopist",image:"./assets/images/doctorfemale.png"},
    {name:"Dr. Sahiba",position:"Senior Surgeon & Endoscopist",image:"./assets/images/doctorfemale.png"},
    {name:"Dr. Sabana",position:"Senior Surgeon & Endoscopist",image:"./assets/images/doctor.png"},
    {name:"Dr. Ahmed",position:"Senior Surgeon & Endoscopist",image:"./assets/images/doctor.png"},
    {name:"Dr. Rahman",position:"Senior Surgeon & Endoscopist",image:"./assets/images/doctorfemale.png"},
    {name:"Dr. Liyakat",position:"Senior Surgeon & Endoscopist",image:"./assets/images/doctorfemale.png"}
  ];


@Input() slices:number = 8;



name = this.doctorlist.map( (item) => item.name);
position = this.doctorlist.map( (item) => item.position);


  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(DialogueComponent,
      {
        data: {
          name: this.name[0],
          position:this.position[0]
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}