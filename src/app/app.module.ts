import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { NewProductsComponent } from './new-products/new-products.component';
import {FormsModule} from "@angular/forms";
import { ExampleComponent } from './example/example.component';
import { FilsComponent } from './data-flow/fils/fils.component';
import { ParentsComponent } from './data-flow/parents/parents.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientsComponent,
    NewProductsComponent,
    ExampleComponent,
    FilsComponent,
    ParentsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
