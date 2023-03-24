import { Component } from '@angular/core';
import { ModalpopupComponent } from '../../modalpopup/modalpopup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  Count =[
  'assets/img/portfolio/cabin.png',
  "assets/img/portfolio/cake.png",
  "assets/img/portfolio/circus.png",
  "assets/img/portfolio/game.png",
  "assets/img/portfolio/safe.png",
  "assets/img/portfolio/submarine.png"];
  constructor(private matDialog:MatDialog) {
    this.Count.length = 6; //you can give any number
  }
  openDialog(){
    this.matDialog.open(ModalpopupComponent,{
      width:'350px',
    })
  }
}
