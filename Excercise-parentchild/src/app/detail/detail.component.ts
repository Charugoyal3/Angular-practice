import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [MainService]
})
export class DetailComponent implements OnInit {

  products: {id: number, name: string, desc: string}[] = [];
  receivedId: number;
  product;

  constructor(private mainService: MainService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.mainService.products;
    this.receivedId = +this.activatedRoute.snapshot.params['id'];
    this.product = this.products.find(el => el.id === this.receivedId);
    console.log(this.product);
  }
}
