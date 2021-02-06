import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-11',
  templateUrl: './child-11.component.html',
})
export class Child11Component {
  @Input() counter;

  ngDoCheck() {
    console.log("Child 11 checked");
  }

  ngOnChanges(){
    console.log("Child 11 changed");
  }

  ngAfterViewChecked(){
    console.log("Child 11 view checked");
  }

}
