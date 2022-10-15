import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { TokenStorageService } from '../_services/token-storage.service';
import { UsersService } from '../_services/users.service';
import { AuthService } from '@auth0/auth0-angular';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user :any
  public refreshing!: boolean ;
private currentUsername!:string;
constructor(private token: TokenStorageService, private usersService:UsersService, private router:Router, private auth : TokenStorageService,private toaster:ToastrService) { }
  ngOnInit(): void {
    this.user = this.auth.getUser()
    console.log(this.user)
    this.getEmployeeById()
    
  }
 
  getEmployeeById() {
    this.usersService.getUserById().subscribe(data => {
      this.user = data;
    });  }
  update(){
    

          this.toaster.success('updated succefully ')
          window.location.reload()


   
    
  }
}