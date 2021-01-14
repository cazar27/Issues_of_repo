export interface IssueInterface {
  title: string;
  id: string;
  html_url: string;
  body: string;
  created_at: string;
  label: object[];
  state: string
}
