import { combineReducers } from "redux";

import {
  FETCH_STATIC_LABELS,
  FETCH_STATIC_LABELS_SUCCESS,
  FETCH_STATIC_LABELS_FAILURE,
} from "./global-constant";
import { GlobalActionType, GlobalState } from "./global-model";

const initialState: GlobalState = { isLoading: false };

export const staticLabel = (
  state: GlobalState = initialState,
  action: GlobalActionType
): GlobalState => {
  switch (action.type) {
    case FETCH_STATIC_LABELS:
      return Object.assign({}, state, {
        payload: action.payload,
        isLoading: true,
      });
    case FETCH_STATIC_LABELS_SUCCESS:
      return Object.assign({}, state, {
        labels: action.data,
        isLoading: false,
      });
    case FETCH_STATIC_LABELS_FAILURE:
      return Object.assign({}, state, { isLoading: false });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  staticLabel,
});

export type GlobalAppState = ReturnType<typeof rootReducer>;

export default rootReducer;
