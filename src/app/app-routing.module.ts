 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { AppComponent } from "app/app.component";
 import { HomeComponent } from "app/home/home.component";
 import { DetailsComponent } from "app/details/details.component";


 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   { path: 'home', component: HomeComponent },
   { path: 'home/:id', component: DetailsComponent }
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
 
 export const routingComponents = [HomeComponent, DetailsComponent];