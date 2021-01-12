import { Component, OnInit } from '@angular/core';
import { Repository } from '../class/Url-repo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-url-repo',
  templateUrl: './form-url-repo.component.html',
  styleUrls: ['./form-url-repo.component.sass']
})
export class FormUrlRepoComponent implements OnInit {
  form: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      url: ['',  [Validators.required,Validators.minLength(10)] ]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const url: any = this.form.get('url');
    let stringUrl = String(url.value);
    const start = stringUrl.substr(0,4);
    if(start.localeCompare('http')) {
      stringUrl = 'https://' + stringUrl;
    }
    console.log(stringUrl);
  }

  get validUrl() {
    return this.form.get('url')?.invalid && this.form.get('url')?.touched
  }

}
