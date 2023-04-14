import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getPosts } from '../../stores/actions';
import { Observable } from 'rxjs';
import { isLoadingSelector, postState } from '../../stores/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { PostStateInterface } from '../../types/postState.interface';

@Component({
  standalone: false,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  isLoading?: Observable<boolean>;
  state?: PostStateInterface

  constructor(private store: Store<AppStateInterface>) {
    // select "isLoadingSelector" from our state in selectors.ts
    this.isLoading = this.store.pipe(select(isLoadingSelector));
    // select "postState" from our state in selectors.ts
    this.store.pipe(select(postState)).subscribe((state) => {
      this.state = state
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

}
