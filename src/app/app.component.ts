import { Component } from '@angular/core';
import {TestService} from './app.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data : any
  constructor(private test : TestService){
  }

  UpdateTitle(){
    this.test.GetData().subscribe(x=>{
      this.title = x.title
      console.log(x)
    },error => {
      debugger
      console.log(error)
    },()=>console.log("completed !!"))
  }

  PostData(){
    let userdata =
      {
        id: 2569,
        name: "sam",
        location: "wales"
      };
    this.test.PostData(userdata).subscribe(x=>{
      debugger
      this.data = x
      console.log(x)
  },error=>{
    console.log(error)
  },()=>{
    console.log('Completed !!')
  });
  }
}
