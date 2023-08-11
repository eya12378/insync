import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{
  activetab : string = 'home';
  nadia : any = {} ;

  constructor(private aziz : ApiService ) { 

   }
 

  ngOnInit(): void { 
   this.nadia=this.aziz.postMethod();
    
  }
  getActiveTab(tabname: string) { 
    this.activetab= tabname;
  }
}
