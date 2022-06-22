import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProductsComponent } from './products/products.component';
import {ParentsComponent} from "./data-flow/parents/parents.component";
import {FilsComponent} from "./data-flow/fils/fils.component";

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"clients",component:ClientsComponent},
  {path:"newProduct",component:NewProductsComponent},
  {path: "data-flow-parents", component:ParentsComponent},
  {path: "data-flow-fils", component:FilsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
