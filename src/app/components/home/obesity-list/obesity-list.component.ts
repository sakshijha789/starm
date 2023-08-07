import { Component } from '@angular/core';

@Component({
  selector: 'app-obesity-list',
  templateUrl: './obesity-list.component.html',
  styleUrls: ['./obesity-list.component.scss']
})
export class ObesityListComponent {


  obesityList = [
    { img: "./assets/images/sleeve.png", name: "Gastric Sleeve", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" },
    { img: "./assets/images/bypass.png", name: "Gastric Bypass", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" },
    { img: "./assets/images/balloon.png", name: "Gastric Balloon", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" },
    { img: "./assets/images/band.png", name: "Gastric Band", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" },
    { img: "./assets/images/surgery.png", name: "Gastric Surgery", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" }
    
    
    ];

}
