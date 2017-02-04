import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  contact: number;
  hobbies: string[];
  showHobbies: Boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Piyush';
    this.email = 'pa@ab.co';
    this.contact = 9293949595;
    this.hobbies = ['Basketball', 'Movies', 'Music'];
    this.showHobbies = true;

    this.postsService
      .getPosts() //This will return an observable, need to subscribe to it
      .subscribe( (items) => {
        //console.dir(posts);
        this.posts = items;
      });

  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby.value);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  ngOnInit() { }
}

interface Post {
  id: number;
  title: string;
  body: string;
}
