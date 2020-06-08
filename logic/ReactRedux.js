import Redux from 'redux'; 
const redux = require('redux');
const createStore= redux.createStore;
const BUY_CAKE='BUY_CAKE';

function buyCakes(){
  return{
    type:'BUY_CAKE',
    info:'Redux Action'
  }
}

const initialState ={
  numOfCakes :10
}

const reducer = (state=initialState,action)=>{
  switch(action.type){
    case BUY_CAKE:
    return{...state,
      numOfCakes:state.numOfCakes-1
    }
    default:return state
  }
}

const store = createStore(reducer)

console.log(store.getState())

const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()))

store.dispatch(buyCakes());

store.dispatch(buyCakes());

unsubscribe();