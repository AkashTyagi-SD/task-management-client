import {FETCH_TODO_LIST,FETCH_TODO_LIST_SUCCESS,FETCH_TODO_LIST_FAILURE} from './login_constant';

import {FetchToDoAction,FetchTodoListResponse} from './login_model';

const initialState:object={ isLoading:false};

const todoList=(state=initialState,action:FetchToDoAction):{isLoading?:boolean;data?:FetchTodoListResponse}=>{
switch(action.type){
case FETCH_TODO_LIST:
    return Object.assign({},state,{
      isLoading:true,  
    });
    case FETCH_TODO_LIST_SUCCESS:
        return Object.assign({},state,{
            data:action.data,
            isLoading:false,
        });
        case FETCH_TODO_LIST_FAILURE:
            return Object.assign({},state,{
                isLoading:false,
            });
            default:
                return state;
}
};

export default todoList;