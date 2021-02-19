import {menulist} from './details'
const initialState = {
    menulist : menulist,
    list : [],
    isPending : false,
    error : '',
}
export const playcard = (state=initialState,action={}) => {
    switch(action.type){
        default:
            return state;
    }
}

export const getlist = (state=initialState,action = {})=>{
    switch(action.type){
        case 'REQUEST_PENDING':
            return {
                ...state,
                isPending : true,
            }
        case 'REQUEST_SUCCED':
            return {
                ...state,
                list : action.payload,
                isPending : false, 
            }
        case 'REQUEST_FAILD':
            return {
                ...state,
                error : action.payload,
                isPending : false,

            }
        case 'ADD_CARD' :
            console.log(state.list);
            return {
                ...state,
                list : [...state.list,action.payload]

            }
        case 'DELETE_CARD':
            var a = state.list;
            a.splice(action.payload,1);
            return {
                ...state,
                list : [...a]
            }
        case 'ADD_MENUE':
            // console.log('addmeny')
            return {
                ...state,
                menulist : [...state.menulist,action.payload]
            }
        default:
            return state;

    }
}