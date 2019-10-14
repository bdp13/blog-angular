import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-angular';
  posts = [
    {
    title: "Mon Premier Post",
    content: "Ma Premiere contribution",
    loveIts: 1,
    created_at: new Date
  },
    {
      title: "Mon Deuxieme Post",
      content: "Ma Deuxieme contribution",
      loveIts: -1,
      created_at: new Date
    },
    {
      title: "Mon Troisieme Post",
      content: "Ma Troisieme contribution",
      loveIts: 0,
      created_at: new Date
    }
  ];
  constructor() {

  }
}
