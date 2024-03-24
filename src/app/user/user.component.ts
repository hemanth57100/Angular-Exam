import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
interface user{
  name:{
    title:string;
    first:string;
    last:string;
  }
  picture:{large:string;};
  email:string;
  phone:string;
  
};
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  apiUrl='https://randomuser.me/api/';
  userData:any=null;
  constructor(private http:HttpClient){}
  fetchUser(){
    this.http.get<any>(this.apiUrl).subscribe({
      next:(response)=>{
        this.userData=response.results[0];
      },
      error:(err)=>{
        console.log('Error has occured ',err);
      }
    })
  }
  onSubmit(event:Event){
    event.preventDefault();
    console.log('Form submitted:',this.userData);
  }

}
