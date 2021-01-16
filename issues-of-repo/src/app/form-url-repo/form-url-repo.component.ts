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
  url: string = "";
  listIssues: IssueInterface[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  onSubmitForm: boolean = false;
  responseMessage: string = '';
  responseError: boolean = false;

  constructor(private fb: FormBuilder, private service: IssueslistService) {
    this.form = this.fb.group({
      url: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const url: any = this.form.get('url');
    let stringUrl = String(url.value);
    this.validateForm(stringUrl);
  }

  validateForm(stringUrl: string): void {

    const start = stringUrl.substr(0, 4);
    if (start.localeCompare('http')) {
      stringUrl = 'https://' + stringUrl;
    }
    stringUrl = stringUrl.replace('https://github.com/', 'https://api.github.com/repos/') + '/issues';
    this.url = stringUrl;
    this.onSubmitForm = true;
    this.page = 1;
    this.getIssues();

  }

  get validUrl() {
    return this.form.get('url')?.invalid && this.form.get('url')?.updateOn
  }

  getUrl(): string {
    return this.form.get('url')?.value;
  }

  onTableDataChange(event: number): void {
    this.page = event;
    this.getIssues();
  }

  onTableSizeChange(event: { target: { value: number; }; }): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getIssues();
  }

  getIssues(): void {

    this.service.getIssues(this.url).subscribe(
      res => this.listIssues = res,
      err => { this.responseError = true; this.responseMessage = err.statusText },
      () => this.responseError = false
    );;

  }

}
