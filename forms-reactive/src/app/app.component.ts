import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'forms-reactive';
  genders = ['Male', 'Female'];
  signupForm : FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null,Validators.required),
      'gender': new FormControl('Male' , Validators.required),
      'city' : new FormControl('Delhi',Validators.required)
    })
  }
  onSubmit(){
    console.log(this.signupForm);
  }
}
