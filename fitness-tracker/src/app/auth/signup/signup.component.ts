import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  constructor(private authService: AuthService){
      
  }

  ngOnInit() {
      this.maxDate = new Date(); //today
      this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
      
  }
  
  onSubmit(form: NgForm){
      this.authService.registerUser({
          email: form.value.email,
          password: form.value.password
      })
  }

}
