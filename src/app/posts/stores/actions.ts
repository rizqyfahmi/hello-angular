import { createAction, props } from "@ngrx/store";
import { PostInterface } from "../types/post.interface";

export const getPosts = createAction("[Posts] Get Posts"); // we need to bring such a unique prefix ([Posts]) because all action is global
export const getPostsSuccess = createAction("[Posts] Get Posts Success", props<{ posts: PostInterface[] }>());
export const getPostsFailure = createAction("[Posts] Get Posts Failure", props<{ error: string }>());