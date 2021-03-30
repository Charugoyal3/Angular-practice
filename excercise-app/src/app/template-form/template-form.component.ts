import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @ViewChild ('f') signup="NgForm";

  onSubmit(){
    console.log(this.signup);
  }

  validateEqual(){}


}
