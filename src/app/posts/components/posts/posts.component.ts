import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPosts } from '../../stores/actions';

@Component({
  standalone: false,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

}
