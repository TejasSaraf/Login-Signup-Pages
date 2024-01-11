import { Component } from '@angular/core';

declare function myFun(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoList';
  ngOnInit(){
  myFun();
  }
}
