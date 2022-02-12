import { GlobalActionType, FetchLabelPayload, Labels } from './global-model';
import {
  FETCH_STATIC_LABELS,
  FETCH_STATIC_LABELS_SUCCESS,
  FETCH_STATIC_LABELS_FAILURE,
} from './global-constant';

export const fetchStaticLabels = (
  data: FetchLabelPayload
): GlobalActionType => ({
  type: FETCH_STATIC_LABELS,
  payload: data,
});

export const fetchStaticLabelSuccess = (
  response?: Labels
): GlobalActionType => ({
  type: FETCH_STATIC_LABELS_SUCCESS,
  data: response,
});

export const fetchStaticLabelFailure = (error?: object): GlobalActionType => ({
  type: FETCH_STATIC_LABELS_FAILURE,
  error: error,
});
