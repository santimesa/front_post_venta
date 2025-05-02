import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { NewProductsComponent } from './view/new-products/new-products.component';
import { EditProductsComponent } from './view/edit-products/edit-products.component';


const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'newproducts', component:NewProductsComponent },
  { path:'editsproducts', component:EditProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompononts=[LoginComponent,DashboardComponent,NewProductsComponent,EditProductsComponent]
