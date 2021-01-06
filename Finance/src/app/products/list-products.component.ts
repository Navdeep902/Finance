import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  //selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  searchProduct:string="";
  products:any;
  constructor(private _activatedRouter: ActivatedRoute, private _router: Router, private productService:ProductService) {
    this.productService.GetAllProducts().subscribe(p=>{
      this.products = p;
    })
   }

  emitenure(id: number): void{
    this._router.navigate(['/tenure', id]);
  }

  ngOnInit(): void {
  }

}
