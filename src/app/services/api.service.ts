import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService implements OnInit {


  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.postMethod();
  }


  public postMethod() : any {

    const key = 'MAIL-2';
    let dataa : any = {};
    const params = { 
      'fields' : '*all' ,
      'fieldsByKeys' : 'false',
     };
    const headers = {
      'Authorization': 'Basic ZXlhLnRvdWlsaTU1QGdtYWlsLmNvbTpBVEFUVDN4RmZHRjBYOE5tdFFSN0tYRTVMSlBLOGw2U0gxTUZwWXc1VEZ3X3ZKdU04UlpfcTNWenJuUkl2R2R2OG9tbEF6OFZpdlR3OTdUVkxra1Z0SE5NTFBSMzNtX0x6cm5OQ09hNzFlS0FLZl9rUU1DSk9xUFJSWjdYQ0hwT1hEQVVkRWpkSnpKVWs3YWdaZ1dpQlZ4T3oyME9PNXJFS0NsNXpPajRhUHBoMmF3VTZZZjE5SUk9RTE5M0JFMjg=', 'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json'
    }
    this.http.get<any>('https://eyatouili.atlassian.net/rest/api/2/issue/' + key, { headers, params }).subscribe(data => {
      console.log(data)
     dataa=data;
    }, error => {
      console.log('error', error) 
    })
    return dataa; 
  }

}
