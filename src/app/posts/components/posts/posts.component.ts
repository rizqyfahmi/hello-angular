import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getPosts } from '../../stores/actions';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, postSelector, postState } from '../../stores/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { PostStateInterface } from '../../types/postState.interface';
import { PostInterface } from '../../types/post.interface';

@Component({
  standalone: false,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    // select "isLoadingSelector" from our state in selectors.ts
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // select "postSelector" from our state in selectors.ts
    this.posts$ = this.store.pipe(select(postSelector));
    // select "errorSelector" from our state in selectors.ts
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

}
