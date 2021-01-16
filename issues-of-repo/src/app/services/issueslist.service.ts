import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssueInterface } from '../module/issue.interface';
@Injectable({
  providedIn: 'root'
})
export class IssueslistService {

  constructor(private http: HttpClient) { }

  getIssues(urlRepo: string): Observable<IssueInterface[]> {
    return this.http.get<IssueInterface[]>(urlRepo);
  }

}
