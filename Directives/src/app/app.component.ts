import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Directives';
  showText= true;
  servers = ['One','Two'];
  name="";
  status: boolean = false;

  show(){
    this.showText=!this.showText;
  }

  clickEvent(){
    this.status = !this.status;       
  }
}
