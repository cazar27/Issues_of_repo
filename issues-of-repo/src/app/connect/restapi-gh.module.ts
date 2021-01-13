import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Octokit } from "@octokit/core";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class RestapiGHModule {

  public async callData(owner:string, repo: string) {
    const octokit = new Octokit({
      auth: `336c187507160d2132b91f2131ae6249d9a4710f`,
      baseUrl: "https://github.acme-inc.com/api/v3",
    });

    const response = await octokit.request('GET /repos/{owner}/{repo}/issues/', {
      owner: owner,
      repo: repo,
    });

    return response.data;
  }

}
