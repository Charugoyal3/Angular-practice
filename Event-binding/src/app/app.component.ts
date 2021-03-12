import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';
  text2='';
  text3='';
  title = 'first-app';
  items = ['Fan', 'Bulb', 'Table'];
  onSave($event){    
    console.log("Save button is clicked!", $event);    
  }    

  onKeyUp(x) { // appending the updated value to the variable 
    this.text += x.target.value + ' | '; 
  } 

  onKeyUpEnter(x) { // appending the updated value to the variable 
    this.text2 += x.target.value + ' | '; 
  }
  onKeyUpEsc(x) { // appending the updated value to the variable 
    this.text3 += x.target.value + ' | '; 
  } 

 

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
