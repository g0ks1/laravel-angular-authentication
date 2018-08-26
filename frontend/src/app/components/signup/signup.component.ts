import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  public error = [];

  constructor(private http: HttpClient) { }

  onSubmit() {
    return this.http.post('//homestead.test/api/signup', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  ngOnInit() {
  }

  handleError(error) {
    this.error = error.error.errors;
  }
}
