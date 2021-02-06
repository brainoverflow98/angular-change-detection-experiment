import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  counter = {count: 0}
  
  increaseCount()
  {
    this.counter.count++;
  }

  ngDoCheck() {
    console.log("App checked");
  }

  ngOnChanges() {
    console.log("App changed");
  }

  ngAfterViewChecked() {
    console.log("App view checked");
  }
}
