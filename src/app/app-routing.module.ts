import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Home", component: HomeComponent },
  { path: "Portfolio", component: PortfolioComponent },
  { path: "About", component: AboutComponent },
  { path: "Contact", component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
