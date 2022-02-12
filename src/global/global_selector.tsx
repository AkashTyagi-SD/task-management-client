import { createSelector } from "reselect";

import { GlobalAppState } from "../global/global-reducer";

const fetchStaticLabel = (state: GlobalAppState) => state.staticLabel;

export const fetchStaticLabelSelector = createSelector(
  fetchStaticLabel,
  (staticLabel) => staticLabel
);
