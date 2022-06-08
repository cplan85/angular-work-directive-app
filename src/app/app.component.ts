import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Register of Users';
  message= '';
  registered= false;
  name='';
  surname='';
  entries: {title: string}[] = [{title:""}];

  constructor(){
    this.entries=[
      {title: "Python every day more present"},
      {title: "Java present for more than 20 years"},
      {title: "Javascript everytime more functional"},
      {title: "Where did Pascal go?"},
    ]
  }

  registerUser(){
    this.registered=true
    this.message="User registered successfully."
  }
}
