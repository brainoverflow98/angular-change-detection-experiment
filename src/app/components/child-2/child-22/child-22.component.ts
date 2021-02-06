import { Component, Input } from "@angular/core";

@Component({
  selector: "child-22",
  templateUrl: "./child-22.component.html"
})
export class Child22Component {
  @Input() counter;

  ngDoCheck() {
    console.log("Child 22 checked");
  }

  ngOnChanges() {
    console.log("Child 22 changed");
  }

  ngAfterViewChecked() {
    console.log("Child 22 view checked");
  }
}
