import { Component} from '@angular/core';
import { BookDialogueComponent } from './book-dialogue/book-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) {}



  openDialog() {
    const dialogRef = this.dialog.open(BookDialogueComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
