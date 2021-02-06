import { Component, Input } from "@angular/core";

@Component({
  selector: "child-2",
  templateUrl: "./child-2.component.html"
})
export class Child2Component {
  @Input() counter;

  ngDoCheck() {
    console.log("Child 2 checked");
  }

  ngOnChanges() {
    console.log("Child 2 changed");
  }

  ngAfterViewChecked() {
    console.log("Child 2 view checked");
  }
}
