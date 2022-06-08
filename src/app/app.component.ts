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

  registerUser(){
    this.registered=true
    this.message="User registered successfully."
  }
}
