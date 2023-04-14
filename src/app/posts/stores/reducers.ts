import { createReducer, on } from "@ngrx/store";
import { PostStateInterface } from "../types/postState.interface";
import { getPosts } from "./actions";

export const initialState: PostStateInterface = {
    isLoading: false,
    posts: [],
    error: null
};

export const reducers = createReducer(
    initialState, 
    on(getPosts, (state) => {
        // We want add a loading indicator when we get posts
        return {...state, isLoading: true}
    })
)