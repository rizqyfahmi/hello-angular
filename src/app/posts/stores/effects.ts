import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getPosts, getPostsFailure, getPostsSuccess } from "./actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { PostInterface } from "../types/post.interface";
import { PostsService } from "../services/posts.service";

@Injectable()
export class PostsEffects {
    getPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getPosts),
            mergeMap(() => {
                return this.postsService.getPosts().pipe(
                    map(
                        (posts: PostInterface[]) => getPostsSuccess({ posts })
                    ),
                    catchError(
                        (error) => of(getPostsFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    constructor(private actions$: Actions, private postsService: PostsService) { }
}
