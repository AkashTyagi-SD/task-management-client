import {FETCH_TODO_LIST,FETCH_TODO_LIST_SUCCESS,FETCH_TODO_LIST_FAILURE} from './login_constant';

import {ActionList,FetchtodoListSuccess,FetchtodoListFailure,FetchTodoListResponse} from './login_model';

export const FetchToDo=():ActionList=>({
    type:FETCH_TODO_LIST
});

export const FetchToDoSuccess=(data:FetchTodoListResponse):FetchtodoListSuccess=>({
    type:FETCH_TODO_LIST_SUCCESS,
    data:data,
})

export const FetchToDoFailure=(error:object):FetchtodoListFailure=>({
    type:FETCH_TODO_LIST_FAILURE,
    error:error,
})