import { Component, OnInit } from '@angular/core';

import { EMICardService } from '../services/emicard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  emicard:any;
  username:string='abc';
  transactions:any;
  constructor(private emicardService:EMICardService) {
    this.emicardService.GetEMICard(1225481).subscribe(c=>{
      this.emicard = c;
    })
    
    this.emicardService.GetCardTransactions(this.username).subscribe(t=>{
      this.transactions = t;
    })
  }

  ngOnInit(): void {
  }

}
