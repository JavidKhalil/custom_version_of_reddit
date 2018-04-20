import { Component, OnInit, HostBinding, Input } from '@angular/core';
// <-- added, Input, HostBinding  } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
//  votes: number;
//  title: string;
//  link: string;

  constructor() {

    // article is populated by the Input now,
    // so we don't need anything here


//    this.article = new Article(
//      'Angular 2',
//      'http://angular.io',
//      10
//    );
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
