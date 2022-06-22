import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Products} from "../models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products! :Array<Products>;
  constructor() {
    this.products = [
      {id:1, libelle:"Imprimante", prix:4500, promtion:true},
      {id:2, libelle:"Ordinateur", prix:2000, promtion:false},
      {id:3, libelle:"Télephone", prix:5600, promtion:true},
      {id:4, libelle:"Souris", prix:600, promtion:true},
    ]
  }

  public getAllProducts(): Observable<Products[]>{
    return of(this.products);
  }

  public deleteProducts(id:number) : Observable<boolean>{
    this.products = this.products.filter(p=>p.id!=id);
    return of(true);
  }

  public setPromotion(id:number): Observable<boolean>{
    let product = this.products.find(p=>p.id==id);
    if (product !=undefined){
      product.promtion =!product.promtion;
      return of(true);
    }else return throwError(()=>new Error("produit non trouvé"));
  }
}
