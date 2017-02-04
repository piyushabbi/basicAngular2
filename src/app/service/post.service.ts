import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; //To work with reactive observables, we need to map the data

@Injectable()
export class PostsService {
  constructor (private http: Http) {
    console.log('PostsService Initialised...');
  }
  getPosts() {
    return this.http
            .get('https://jsonplaceholder.typicode.com/posts')
            .map( res => res.json() );
  }
}
