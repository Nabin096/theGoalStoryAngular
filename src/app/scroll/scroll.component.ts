import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChangeEvent } from 'angular2-virtual-scroll';
import { Blog } from '../blog'
import { BlogService } from '../blog.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgOnChangesFeature } from '@angular/core/src/render3';



@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
  inputs: ['genre']
})
export class ScrollComponent implements OnInit, OnChanges {
  @Input()
  genre
  constructor(
    private ser: BlogService
  ) {
  }

  protected viewPortList: Blog[] = [];
  protected buffer: Blog[] = [];
  protected loading: boolean;
  protected page: number;
  refresh: boolean = false
  ngOnChanges() {
    this.page = 1
    this.ser.getBlogs(this.page, this.genre).subscribe(elements => {
      this.buffer = elements
    })
    
    setInterval(() => {
      this.ser.getTopBlog(this.genre).subscribe(data => {
        var max = Math.max.apply(Math, this.buffer.map(function (o) { return o['blogId']; }))
        if (max<data['blogId']) {
          this.buffer.push(data)
        }
      })
    }, 300000);
  }
  ngOnInit() {

  }
 
  protected fetchMore(event: ChangeEvent) {
    if (event.end !== this.buffer.length - 1) return;

    this.loading = true;
    this.page = this.page + 1;
    this.ser.getBlogs(this.page, this.genre).subscribe(elements => {
      this.buffer = this.buffer.concat(elements)
      console.log(this.buffer)
      var start = 4 * (this.page - 1)
      var end = 4 * this.page - 1
      this.viewPortList=this.buffer.slice(start, end)
    })
    this.loading = false


  }



}
