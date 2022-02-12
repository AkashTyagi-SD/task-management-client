import { all, put, fork, PutEffect, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import {
  fetchStaticLabelSuccess,
  fetchStaticLabelFailure,
} from "./global-action";
import { FETCH_STATIC_LABELS } from "./global-constant";
import { FetchStaticLabels, GlobalActionType } from "./global-model";
import { fetchFileUtil } from "../util/fetch-file-util";

export function* fetchStaticLabels({
  payload,
}: FetchStaticLabels): IterableIterator<
  Promise<Response | PutEffect<GlobalActionType>> | PutEffect<GlobalActionType>
> {
  try {
    const response = yield fetchFileUtil(payload.filePath, payload.fileType);
    yield put(fetchStaticLabelSuccess(response));
  } catch (error: any) {
    console.log("error", error);
    yield put(fetchStaticLabelFailure(error));
  }
}

export function* globalSaga(): SagaIterator {
  yield takeLatest(FETCH_STATIC_LABELS, fetchStaticLabels);
}
export default function* rootSaga(): SagaIterator {
  yield all([fork(globalSaga)]);
}
