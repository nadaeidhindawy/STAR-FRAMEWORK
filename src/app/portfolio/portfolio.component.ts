import { Component, ElementRef, viewChild } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imgUrl: string[] = ['poert1.png', 'port2.png', 'port3.png', 'poert1.png', 'port2.png', 'port3.png'];
  imageInModel: string = ''

  bindImage(image: string) {
    this.imageInModel = image;

  }




}

