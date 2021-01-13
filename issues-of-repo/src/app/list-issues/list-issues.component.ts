import { Component, OnInit } from '@angular/core';
import { IssueInterface } from '../module/issue.interface';
import { IssueslistService } from '../services/issueslist.service';

@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.sass']
})
export class ListIssuesComponent implements OnInit {

  page:number =  1;
  url: string = "https://api.github.com/repos/recharts/recharts";
  issues:IssueInterface[] = new Array;
  pagination:number[] = new Array(3);

  constructor(private issuesService: IssueslistService) { }

  ngOnInit(): void {
    this.getIssues(this.url);
  }

  getIssues(url: string,page?: string): void {

    this.issuesService.getIssues(url)
    .subscribe(issues => this.issues = issues);

  }

  setPage(pageIn: number) {
    this.page = pageIn;
  }

}
