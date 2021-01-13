import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssueInterface } from '../module/issue.interface';
import {RestapiGHModule} from '../connect/restapi-gh.module';

@Injectable({
  providedIn: 'root'
})
export class IssueslistService {
  private urlBase = "https://api.github.com/repos/recharts/recharts/issues";

  constructor( private http: HttpClient) { }

  getIssues(newUrl: string): Observable<IssueInterface[]> {
    // const page = 1 || newPage;
    // let params = new HttpParams();
    // if(page>0) {
    //   params = params.append('page', String(newPage));
    //   params = params.append('per_page', '4');
    // }
    // let options = { params }

    this.urlBase = this.urlBase || newUrl;
    //return this.http.get<IssueInterface[]>(this.urlBase, options);
    return this.http.get<IssueInterface[]>(this.urlBase);
  }

}
