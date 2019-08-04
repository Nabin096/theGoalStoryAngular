import { Component, OnInit } from '@angular/core';
import { Blog} from '../blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service'
import {Elements} from '../elements'


@Component({
  selector: 'app-blogcontent',
  templateUrl: './blogcontent.component.html',
  styleUrls: ['./blogcontent.component.css']
})
export class BlogcontentComponent implements OnInit {

  blogs:Elements[]=[]
  author=''
  title=''
  date=null
  private blogId:number;

  constructor(
    private route: ActivatedRoute,
    private blogSer:BlogService
   
  ) { }
  ngOnInit() {
    this.blogId=this.getBlogId();
    this.getBlog(this.blogId)
  }
  getBlogId(): number {
    const blogId= +this.route.snapshot.paramMap.get('id');
    return blogId

  }
  getBlog(blogId){
      this.blogSer.getBlog(blogId).subscribe(data=>{
      this.blogs= data
      console.log(data)
      this.date=Date.parse(this.blogs[0].innerHTML)
      this.title=this.blogs[1].innerHTML
      this.author=this.blogs[2].innerHTML
      this.blogs=this.blogs.slice(3,(this.blogs.length))
      console.log(this.blogs)
    })
  }

}
