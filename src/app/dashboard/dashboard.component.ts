import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.postMethod();
  }


  public postMethod() {

    const headers = {
      'Authorization': 'Basic d2N0bmFzOnBhc3N3b3Jk', 'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'X-Atlassian-Token': 'nocheck'
       

    }
    this.http.get<any>('', { headers }).subscribe(data => {
      console.log(data)
    }, error => {
      console.log('error', error)
    })
  }

}

