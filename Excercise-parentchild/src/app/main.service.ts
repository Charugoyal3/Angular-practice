import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  products = [
    {
      id: 1,
      name: 'Mobile',
      desc: 'This is a mobile phone'
    },
    {
      id: 2,
      name: 'Tablet',
      desc: 'This is a Tablet phone'
    },
    {
      id: 3,
      name: 'Laptop',
      desc: 'This is a Laptop'
    },
    {
      id: 4,
      name: 'Keyboard',
      desc: 'This is a Keyboard'
    }
  ];

  constructor() { }
}
