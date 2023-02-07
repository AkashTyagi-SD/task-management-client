import {FETCH_TODO_LIST,FETCH_TODO_LIST_SUCCESS,FETCH_TODO_LIST_FAILURE} from './login_constant';

export interface ActionList{
    type:typeof FETCH_TODO_LIST | typeof FETCH_TODO_LIST_SUCCESS | typeof FETCH_TODO_LIST_FAILURE
}

export interface FetchtodoListSuccess extends ActionList{
    data?:FetchTodoListResponse;
}

export interface FetchtodoListFailure extends ActionList{
    error?:object;
}

export type FetchToDoAction=ActionList & FetchtodoListSuccess & FetchtodoListFailure;

export type DispatchToDoAction=ActionList | FetchtodoListSuccess| FetchtodoListFailure;

export interface DispatchToProps{
    FetchToDo:()=>void;
}

export interface StateToProps{
    data:FetchTodoListResponse;
    isLoading:boolean;
}

export interface FetchToDoSate{
    data:FetchTodoListResponse;
    isLoading:boolean;
}


export interface FetchTodoListResponse{
    data:Array<ToDo>;
}

export interface ToDo{
    id:number;
    title:string;
    body:string;
}

export type Props=DispatchToProps & FetchToDoSate;
