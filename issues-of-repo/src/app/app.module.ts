import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormUrlRepoComponent } from './form-url-repo/form-url-repo.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormUrlRepoComponent,
    ListIssuesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
