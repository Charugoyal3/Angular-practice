import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [MainService]
})
export class ListingComponent implements OnInit {

  products: {id: number, name: string, desc: string}[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
      this.products = this.mainService.products;
  }

}
