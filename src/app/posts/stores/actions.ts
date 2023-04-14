import { createAction } from "@ngrx/store";

export const getPosts = createAction("[Posts] Get Posts"); // we need to bring such a unique prefix ([Posts]) because all action is global