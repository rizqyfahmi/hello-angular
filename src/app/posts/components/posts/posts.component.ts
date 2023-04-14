import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getPosts } from '../../stores/actions';
import { Observable } from 'rxjs';
import { isLoadingSelector } from '../../stores/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';

@Component({
  standalone: false,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  isLoading?: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {
    // select "isLoadingSelector" from our state
    this.isLoading = this.store.pipe(select(isLoadingSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

}
