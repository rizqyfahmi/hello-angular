import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface } from '../types/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getPosts(): Observable<PostInterface[]> {
    const posts: PostInterface[] = [
      { id: "1", title: "First post" },
      { id: "2", title: "Second post" },
      { id: "3", title: "Third post" },
    ];

    return of(posts).pipe(delay(2000));
  }
}
