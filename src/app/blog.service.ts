import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import{Blog} from './blog'
import { HttpClient } from '@angular/common/http';
import{Elements} from './elements'


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs (page:number,genre): Observable<Blog[]> {
    try{
      var url="http://localhost:8000/SharedExperiences/getAllBlogs/"+page+"/"+genre
      return this.http.get<Blog[]>(url)
    }
    catch(e){

    }
    
  }

  getBlog(blogId:number):Observable<Elements[]>{
    var url="http://localhost:8000/SharedExperiences/getBlogApi/"+blogId
    alert(url)
    return this.http.get<Elements[]>(url)

  }

  getTopBlog(genre):Observable<Blog>{
    var url="http://localhost:8000/SharedExperiences/getTopBlog/"+genre
    return this.http.get<Blog>(url)
  }
}
