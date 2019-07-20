import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// export class AppComponent {}

// with life cycle hook
export class AppComponent implements OnInit {
  title = 'App';

  posts: object;

  // Constructor is for injecting data or services
  constructor(private http: HttpClient) {}

  // Angular life cycle hook
  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
      });
  }

  user = {
    firstname: '',
    lastname: '',
  };

  // submit form // get values
  submitForm(theForm: NgForm) {
    // submitted
    // console.log(theForm);
    // console.log(theForm.value.firstname);
    // console.log(theForm.value.lastname);
    this.user.firstname = theForm.value.firstname;
    this.user.lastname = theForm.value.lastname;
    console.log(this.user);
  }

  // add new post
  submitPost(thePost: NgForm) {
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: Math.random(),
        id: Math.random(),
        title: thePost.value.title,
      })
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log('Post not added');
        },
      );
  }
}
