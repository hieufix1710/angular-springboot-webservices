import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../service/token-storage.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  user: User;
  username = '';
  userAvatar = '';


  constructor(private tokenStorageService: TokenStorageService,
              private userService: UserService

  ) { }

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUsername();
    this.userService.getUser(this.username).subscribe(
      (data) => {
        this.user = data;
        this.userAvatar  = this.user.avatar
      }
    )
  }
  logout(){
    this.tokenStorageService.signOut();
  }

}
