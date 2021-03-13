import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  username='TTN';//event
  name="Charu";
  constructor() { }

  ngOnInit(): void {
  }
  onInputServe(event:Event){
    this.username=(<HTMLInputElement>event.target).value;
  }
}
