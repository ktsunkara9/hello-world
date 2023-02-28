import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url)
  }

  createPost(postData) {
    return this.httpClient.post(this.url, postData);
  }

  updatePost(id, post) {
    return this.httpClient.put(this.url+'/'+id, post);
  }

  deletePost(id) {
    return this.httpClient.delete(this.url+'/'+id)
    //         .pipe(map(response=> response), 
    //             catchError(e => console.log(e)));
  }
}
