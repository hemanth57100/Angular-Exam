import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { ChildFontComponent } from './child-font/child-font.component';
import { AdjPipe } from './adj.pipe';
import { Adj1Pipe } from './adj1.pipe';
import { MyFormComponent } from './my-form/my-form.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NumberListComponent } from './number-list/number-list.component';
import { UserComponent } from './user/user.component';
import { DataComponent } from './data/data.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Component1Component,Component2Component,Component3Component,Component4Component,ChildComponent,CommonModule,ChildFontComponent,AdjPipe,Adj1Pipe,MyFormComponent,HomeComponent,ContactComponent,AboutComponent,RouterOutlet,RouterLink,NumberListComponent,UserComponent,DataComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exam';
  Names:string="";
  parentValue='Value from parent';
  getValueFromChild(value:string){
    this.Names=value;
    console.log(value);
  }
  size:number=15;
  sendFontSize(value:string){
    this.size=parseInt(value);
  }
  College:string='MITE';
  handleFormSubmission(formData:any){
    console.log('Form data submitted:',formData)
  }

  constructor(private http:HttpClient){}
  addObject(){
    const newObject={id:1,name:'Hemanth'};
    this.http.put<any>('http://localhost:3001/api/objects',newObject).subscribe(response=>{
      console.log('object added successfully',response);
    });
  }
}

