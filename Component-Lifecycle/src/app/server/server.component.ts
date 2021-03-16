import { Component, 
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, 
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit,
OnChanges,
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit,
AfterViewChecked,
OnDestroy
{
  @Input() data: string;
  lifecycleTicks: number = 0;
  constructor() { 
    console.log("Constructor Called");
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges Called");
    console.log(changes);
    this.lifecycleTicks++;

  }

  ngOnInit(){
    console.log("ngOnInit is Called!");
  }

  ngDoCheck(){
    console.log("Do Check Called!!");
  }
  ngAfterContentInit(){
    console.log("NgAfterContentInit Called!!");
  }
  ngAfterContentChecked(){
    console.log("NgAfterContentChecked called!!");
  }

  ngAfterViewInit(){
    console.log("NgAfterViewInit Called!!");
  }
  ngAfterViewChecked(){
    console.log("NgAfterViewChecked called!!");
  }
  ngOnDestroy(){
    console.log("Destroy Called");
  }
}
