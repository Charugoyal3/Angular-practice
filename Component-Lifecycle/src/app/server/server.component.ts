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
    console.log(" This is called first -> Constructor Called");
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("This is called after constructor -> ngOnChanges Called");
    console.log(changes);
    this.lifecycleTicks++;

  }

  ngOnInit(){
    console.log(" After OnChanges -> ngOnInit is Called!");
  }

  ngDoCheck(){
    console.log("After On Changes and Oninit -> Do Check Called!!");
  }
  ngAfterContentInit(){
    console.log("It is called after first doCheck -> NgAfterContentInit Called!!");
  }
  ngAfterContentChecked(){
    console.log("It gets called after ngAfterContentInit and every subsequent ngDoCheck-> NgAfterContentChecked called!!");
  }

  ngAfterViewInit(){
    console.log("It responds after a component's view, or a child component's view is initialized-> NgAfterViewInit Called!!");
  }
  ngAfterViewChecked(){
    console.log("It gets called after ngAfterViewInit, and it responds after the component's view, or the child component's view is checked -> NgAfterViewChecked called!!");
  }
  ngOnDestroy(){
    console.log("Destroy Called");
  }
}
