import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from "../services/products.service";
import {Products} from "../models/products.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Array<Products>;
  errorMessage!:string;
  jc: string = 'Jean Claude';
  constructor(private router:Router, private productService: ProductsService) { }

  ngOnInit(): void {
    this.handleGetAllProduct();
  }
  handleGetAllProduct(){
    this.productService.getAllProducts().subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    });
  }
  newProduct():void{
    this.router.navigateByUrl("/newProduct")
  }

  handleDeleteProduct(p: Products) {
    this.productService.deleteProducts(p.id).subscribe({
      next:(data)=>{
       // this.handleGetAllProduct();
        let index = this.products.indexOf(p);
        this.products.splice(index,1);
      }
    })
  }

  handleSetPromotion(p: Products) {
    this.jc = p.id + '';
    let  promo = p.promtion;
    this.productService.setPromotion(p.id).subscribe({
      next:(data)=>{
        p.promtion =!promo;
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    })
  }
}
