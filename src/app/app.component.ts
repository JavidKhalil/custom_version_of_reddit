import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  m_title: string;

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
  constructor() {
    this.m_title = 'the custom version of reddit';
  }

}
