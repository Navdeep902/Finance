import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-emi-tenures',
  templateUrl: './emi-tenures.component.html',
  styleUrls: ['./emi-tenures.component.css']
})
export class EmiTenuresComponent implements OnInit {

  product:any;
  tenure:any;
  pm:any;
  data:any = [
    {id_:3, t: "3 MONTHS"},
    {id_:6, t: "6 MONTHS"},
    {id_:9, t: "9 MONTHS"}
  ];

  constructor(private _activatedRouter: ActivatedRoute, private _router: Router, private productService:ProductService) {
    const id=+this._activatedRouter.snapshot.params['id']; 
    this.productService.GetProduct(id).subscribe(p=>{
      this.product = p;
    })
  }

  ngOnInit(): void {
  }

  selected(){
    console.log(this.tenure.id_);
    this.pm=this.product.Cost/this.tenure.id_;
  }

}
