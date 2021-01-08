import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {TokenStorageService} from '../service/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMesLogin: string;
  roles: string;
  constructor(private fb: FormBuilder, private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  submitLogin(){
    this.authService.attemptAuth(this.loginForm.value).subscribe(
      (jwtResponse) =>{
            if (jwtResponse == null){
                  this.errorMesLogin = 'Account or Password was wrong ';
            }else {
                this.tokenStorageService.saveToken(jwtResponse.accessToken);
              this.tokenStorageService.saveUsername(jwtResponse.username);
              this.tokenStorageService.saveAuthorities(jwtResponse.authorities);
              this.roles = this.tokenStorageService.getAuthorities();

               this.router.navigateByUrl('/')
            }
      },error => console.log('Fail to login')
    );
  }

}
