import {put,takeLatest,PutEffect} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';

import axios from 'axios';

import {FETCH_TODO_LIST,FETCH_TODO_URL} from './login_constant';
import {FetchTodoListResponse,FetchtodoListSuccess,FetchtodoListFailure} from './login_model';
import {FetchToDoSuccess,FetchToDoFailure} from './login_action';


export function* todoListFunction():IterableIterator<Promise<FetchTodoListResponse> | PutEffect<FetchtodoListSuccess | FetchtodoListFailure>>{
    try{
        const response:any=yield axios.get(FETCH_TODO_URL);
        yield put(FetchToDoSuccess(response.data));
    }catch(error:any){
        yield put(FetchToDoFailure(error));
    }   
}

export default function* todoListGet():SagaIterator{
    yield takeLatest(FETCH_TODO_LIST,todoListFunction);
}
