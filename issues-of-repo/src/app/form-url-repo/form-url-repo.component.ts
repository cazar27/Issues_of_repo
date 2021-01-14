import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssueInterface } from '../module/issue.interface';
import { IssueslistService } from '../services/issueslist.service';
@Component({
  selector: 'app-form-url-repo',
  templateUrl: './form-url-repo.component.html',
  styleUrls: ['./form-url-repo.component.sass']
})
export class FormUrlRepoComponent implements OnInit {
  form: FormGroup;
  url = "";
  listIssues: IssueInterface[] = [];
  page = 1;
  count = 0;
  tableSize = 7;

  constructor(private fb: FormBuilder, private service: IssueslistService) {
    this.form = this.fb.group({
      url: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const url: any = this.form.get('url');
    let stringUrl = String(url.value);
    const start = stringUrl.substr(0, 4);
    if (start.localeCompare('http')) {
      stringUrl = 'https://' + stringUrl;
    }
    stringUrl = stringUrl.replace('https://github.com/', 'https://api.github.com/repos/');
    stringUrl = stringUrl + '/issues';
    this.url = stringUrl;
    this.getIssues();
    console.log(stringUrl);
  }

  get validUrl() {
    return this.form.get('url')?.invalid && this.form.get('url')?.updateOn
  }

  getUrl(): string {
    return this.form.get('url')?.value;
  }

  onTableDataChange(event: number) {
    this.page = event;
    this.getIssues();
  }

  onTableSizeChange(event: { target: { value: number; }; }): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getIssues();
  }

  getIssues(): void {
    this.service.getIssues(this.url).subscribe(issue => this.listIssues = issue);
  }


}
