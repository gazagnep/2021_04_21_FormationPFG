import {createStore, combineReducers} from 'redux'; //combineReducers =>
import { REST_ADDR } from '../config/config';

export const initialState={
    messages:[],
    tchatUsers:[],
    selectedDestId:-1,
    connectedUser:null
}

export const TCHAT_ACTIONS=Object.freeze({
    ADD_USER:'ADD_USER',
    ADD_USERS:'ADD_USERS',
    ADD_MESSAGES:'ADD_MESSAGES',
    SEND_MESSAGE:'SEND_MESSAGE',
    SELECT_DEST:'SELECT_DEST'
});

const TCHAT_PRIVATE_ACTIONS=Object.freeze({
    INIT:'@@redux/INIT',
    INIT_PULLING:'INIT_PULLING',
    PULLING:'PULLING'
});

function tchatReducer(state=initialState,action) {
    console.log(action.type)
    if(action.type.includes('@@redux/INIT')){
        action.type='@@redux/INIT';
    }
    switch(action.type)
    {
        case TCHAT_PRIVATE_ACTIONS.INIT:
            fetch(`${REST_ADDR}/messages`).then(f=>f.json()).then(o=>{
                store.dispatch({type:TCHAT_ACTIONS.ADD_MESSAGES,values:o});
            })
            fetch(`${REST_ADDR}/tchatUsers`).then(f=>f.json()).then(o=>{
                store.dispatch({type:TCHAT_ACTIONS.ADD_USERS,values:o});
            })
            setInterval(()=>{store.dispatch({type:TCHAT_PRIVATE_ACTIONS.PULLING})},20000);//INIT_PULLING (dispatch not available in INIT)
            return state;
        case TCHAT_ACTIONS.ADD_USER:return {...state,tchatUser:[...state.tchatUsers,action.value]};
        case TCHAT_ACTIONS.ADD_USERS:return {...state,tchatUsers:[...state.tchatUsers,...action.values]};
        case TCHAT_ACTIONS.ADD_MESSAGES:return {...state,messages:[...state.messages,...action.values]};
        case TCHAT_ACTIONS.SEND_MESSAGE:
            fetch(`${REST_ADDR}`,{
                method:'POST',
                body:JSON.stringify(action.value),
                headers: {
                    'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(f=>{console.log(f)},f=>{console.log(f)})
            return {...state, messages: [...state.messages, action.value]};

        case TCHAT_ACTIONS.SELECT_DEST:
            return {...state,selectedDestId:action.value};

        // case TCHAT_PRIVATE_ACTIONS.INIT_PULLING:
        //     setInterval(()=>{store.dispatch({type:TCHAT_PRIVATE_ACTIONS.PULLING})},2000)
        //     return state;
        case TCHAT_PRIVATE_ACTIONS.PULLING:
            let last=0;
            console.log('Pulling');
            state.messages.forEach((e)=>{last=e.id>last?e.id:last;})
            fetch(`${REST_ADDR}/messages?id_gte=${last+1}`)
            .then(f=>f.json())
            .then(o=>{
                if (o.length <= 0)  return;                
                store.dispatch({type:TCHAT_ACTIONS.ADD_MESSAGES,values:o})    
            });
            return state;
        //case 'ADD_':return state;
        default:return state;
    }
}

// let state=initialState;
// console.log(state);
// state=tchatReducer(state,{type:'ADD_MESSAGES',values:[{login:'alex'},{login:'josé'}]})
// console.log(state);
// state=tchatReducer(state,{type:'ADD_MESSAGES',values:[{login:'pascal'},{login:'dom'}]})

const store=createStore(tchatReducer);
// const store=createStore(combineReducers({tchat: tchatReducer,mangeUser:usersReducer})); //cas de passage de plusieurs paramètres
// store.getState().tchat.messages
export default store;

store.subscribe(()=>{
    console.log(store.getState());
});

// store.dispatch({type:'ADD_USERS',values:[{login:'alex'},{login:'body'}]});
// store.dispatch({type:'ADD_USERS',values:[{login:'pascal'},{login:'dom'}]});
// store.dispatch({type:'ADD_USERS',values:[{login:'pierre yves'},{login:'J\'ean'}]});
