import { Component, OnInit } from '@angular/core';
import {AuthService} from "./authservice";

@Component({
  selector: 'app-services',
  template: `<a [hidden]="needsLogin()">Login</a>`,
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  needsLogin() {
    return !this.auth.isAuthenticated();
  }




}
