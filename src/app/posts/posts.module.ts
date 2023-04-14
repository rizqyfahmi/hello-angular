import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './stores/reducers';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("posts", reducers) // "posts" will become a part of app state
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
