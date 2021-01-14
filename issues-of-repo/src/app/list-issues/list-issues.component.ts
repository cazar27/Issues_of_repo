import { Component, OnInit, Input } from '@angular/core';
import { IssueInterface } from '../module/issue.interface';
import { IssueslistService } from '../services/issueslist.service';

@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.sass']
})
export class ListIssuesComponent implements OnInit {

  constructor(private issuesService: IssueslistService) { }

  @Input()
  listIssues: IssueInterface[] = [];

  ngOnInit(): void {
  }

}
