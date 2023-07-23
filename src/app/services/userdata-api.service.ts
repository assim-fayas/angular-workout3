import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataApiService {

  constructor(private http:HttpClient) {
  } 

getUserDetails(){
 return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
}

}
