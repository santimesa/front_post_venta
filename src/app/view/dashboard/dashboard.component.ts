import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

import { ListProducts } from '../../models/listProducts.interfaces';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: ListProducts[] = [];
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  this.api.getListProducts().subscribe(data => {
    this.products=data;
  });
  }



}
