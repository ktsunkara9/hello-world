import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-http-services-demo',
  templateUrl: './http-services-demo.component.html',
  styleUrls: ['./http-services-demo.component.css']
})
export class HttpServicesDemoComponent {

  posts: any;

  constructor(private service: PostsService) {
    service.getPosts()
      .subscribe(response => {
        this.posts = response;
    }, error => {
      alert('An unexpected error occured');
      console.log(error);
    })
  }

  createPost(event: any) {
    console.log(event?.target?.value);
    let postData = {title: event?.target?.value};
    this.service.createPost(postData).subscribe(res => {
      console.log(res);
      postData['id'] = res['id'];
      this.posts.splice(0,0,postData);
    }, (error: Response) => {
      if(error.status === 400) {
        // this.form.setErrors(error.json);
      }
      alert('An unexpected error occured');
      console.log(error);
    });
  }

  onUpdate(post: any) {
    // console.log(post.id);
    /* this.httpClient.patch(this.url+'/'+post.id, {isRead: true}).subscribe(res => {
      console.log(res);
    }) */

    this.service.updatePost(post.id, post).subscribe(res => {
      console.log(res);
    }, error => {
      alert('An unexpected error occured');
      console.log(error);
    });
  }

  onDelete(post: any) {
    this.service.deletePost(1099)
    .subscribe({
      next: res => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      error: (error: Response) => {
        if(error.status === 404) {
          alert('The Post is already deleted');
        } else {
          alert('An unexpected error occured');
          console.log(error);
        }
      }
    });
    // .subscribe(res => {
    //   let index = this.posts.indexOf(post);
    //   this.posts.splice(index, 1);
    // }, (error: Response) => {
    //   if(error.status === 404) {
    //     alert('The Post is already deleted');
    //   } else {
    //     alert('An unexpected error occured');
    //     console.log(error);
    //   }
    // });
  }

}
