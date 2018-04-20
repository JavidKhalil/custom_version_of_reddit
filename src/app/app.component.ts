import { Component } from '@angular/core';
import { Article } from './article/article.model'; // <-- import this

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]; // <-- component property
  m_title: string;

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
  constructor() {
    this.m_title = 'the custom version of reddit';
    this.articles = [
    new Article('Angular 2', 'http://angular.io', 3),
    new Article('Fullstack', 'http://fullstack.io', 2),
    new Article('Angular Homepage', 'http://angular.io', 1)
    ]
  }
}
