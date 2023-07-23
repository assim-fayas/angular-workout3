import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

constructor(private route:Router){}

loadHome(){
this.route.navigate(['home'])
}

loadProfile(){
this.route.navigate(['profile'])
}

}
