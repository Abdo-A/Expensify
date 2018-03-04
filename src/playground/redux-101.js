import { createStore } from "redux";

//=> Reducers

const countReducer=(state={count:0},action)=>{

    switch(action.type){
        case 'INCREMENT':
            return {
                count:state.count+action.incrementBy
            };
        case 'DECREMENT':
            return {
                count:state.count-action.decrementBy
            };
        case 'SET':
            return{
                count:action.count
            }

        case 'RESET':
            return {
                count:0
            };
        default:
            return state;
    }
};


//=>Creating the store
const store = createStore(countReducer);


//=>Action Generators:
const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = ()=>({
    type:'RESET'
});

const setCount = ({count}={})=>({
    type: 'SET',
    count:count
});


//=>Subscribing to the store, do fire a function once the values in the store are changed:
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});


//=>Calling the action generators:

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// });

store.dispatch(incrementCount({incrementBy:5}));

// store.dispatch({
//     type:'INCREMENT'
// });

store.dispatch(incrementCount());

// store.dispatch({
//     type:'RESET'
// });
store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy:100}));

store.dispatch(decrementCount());

// store.dispatch({
//     type:'SET',
//     count:101
// });
store.dispatch(setCount({count:101}));

