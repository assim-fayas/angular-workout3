import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route:Router){}

  loadProfile(){

    this.route.navigate(['profile'])

  }

  loadBlog(){
this.route.navigate(['blogs'])
  }


}
