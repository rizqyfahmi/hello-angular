import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

// It may be has more than one state inside app state. So, we need to specify the state we want to select
export const postState = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
    postState,
    (state) => state.isLoading
);