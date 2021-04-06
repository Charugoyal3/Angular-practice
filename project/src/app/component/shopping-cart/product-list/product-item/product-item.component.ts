import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem : Product;

  constructor(private msg: MessengerService, private router:Router) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    if(localStorage.getItem("currusers")!=null){
      console.log(localStorage.getItem("currusers"))
    this.msg.sendMsg(this.productItem);
    }
    else{
      alert("You are not log-in")
      this.router.navigate(['/register']);
    }
  }

}
