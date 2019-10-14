import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

@Input() postTitre : string = "titre";
@Input() postContent: string = "content";
@Input() postDate: Date = new Date;
@Input() postLoveIts: number = 0;

 
  constructor() { }

  ngOnInit() {
  
  }

  onLike() {
    this.postLoveIts = this.postLoveIts + 1;
  }
  onDontLike() {
    this.postLoveIts = this.postLoveIts - 1;
  }

  getColor() {};
}
