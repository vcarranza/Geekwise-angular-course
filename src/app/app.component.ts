import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:'Hello World!';
  age: 90000;
  isShown: "I am being shown";
  notShown: "i am not being shown";


  person: object = {
    name: "Victor", 
    age: 5000,
    course: "angular"
  };
  people: object[]= [ 
    {
      name:"Victor",
      age: 100000,
      course:"angular"

    }
  ];

  colors: string[] = ["red", "blue","green", "yellow" ];

  myFunction(shouldShow: boolean): string {
    // if (shouldShow) {return "i am being shown"} else {return "i am not being shown"}
    return shouldShow ? this.isShown: this.notShown;
  }
}
