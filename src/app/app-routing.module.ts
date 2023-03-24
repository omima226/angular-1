import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path:'home',component:HomeComponent , title:"home"},
  {path:'portfolio',component:PortfolioComponent , title:"portfolio"},
  {path:'about',component:AboutComponent , title:"about"},
  {path:'contact',component:ContactComponent , title:"contact"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
