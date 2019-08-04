import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-skeleton',
  templateUrl: './feed-skeleton.component.html',
  styleUrls: ['./feed-skeleton.component.css']
})
export class FeedSkeletonComponent implements OnInit {

  genre:string="all"
  constructor() { }
  changeFeed(s){
    this.genre=s;
  }
  ngOnInit() {
    
  }

}
