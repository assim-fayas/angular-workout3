import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserdataApiService } from 'src/app/services/userdata-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  usersdata!:[any]

  constructor(private route: Router, private userdata:UserdataApiService ) { }

  ngOnInit(){
    this.userdata.getUserDetails().subscribe((res:any)=>{
      
    this.usersdata=res
    console.log(this.usersdata);
    
      
        },(error:any)=>{
          console.error('error fetching user details:',error);
          
        }) 
  }

  loadHome() {
    this.route.navigate(["home"])
  }


  loadBlog() {
    this.route.navigate(["blogs"])
  }


 
}
