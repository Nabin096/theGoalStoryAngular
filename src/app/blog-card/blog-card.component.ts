import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input()
  item
  constructor(
    
  ) { }

  ngOnInit() {
    
  }
  

}
