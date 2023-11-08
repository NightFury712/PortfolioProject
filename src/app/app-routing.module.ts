import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { WorkPageComponent } from './components/work-page/work-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }, 
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "work",
    component: WorkPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
