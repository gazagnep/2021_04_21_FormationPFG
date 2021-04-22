const initialState={
    messages:[],
    tchatUsers:[]
}
function tchatReducer(state=initialState,action) {
    console.log(action.type)
    switch(action.type)
    {
        case 'ADD_USER':return {...state,tchatUser:[...state.tchatUsers,action.value]};
        case 'ADD_USERS':return {...state,tchatUsers:[...state.tchatUsers,...action.values]};
        case 'ADD_MESSAGES':return {...state,messages:[...state.messages,...action.values]};
        //case 'ADD_':return state;
        default:return state;
    }
}
// let state=initialState;
// console.log(state);
// state=tchatReducer(state,{type:'ADD_MESSAGES',values:[{login:'alex'},{login:'josé'}]})
// console.log(state);
// state=tchatReducer(state,{type:'ADD_MESSAGES',values:[{login:'pascal'},{login:'dom'}]})
