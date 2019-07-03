

const { createStore } = Redux; // 1. importing Redux

const initState = { // 5. the initial state will fire in initState (myreducer function)
    todos: [],
    posts: []
}

function myreducer(state = initState, action){ // 3. setting two parameters, state of the store // 
    if (action.type == 'ADD_TODO') { //8. condition to update the state 
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    }

    if (action.type == 'ADD_POST') {
        return {
            ...state,
            posts: [...state.posts, action.posts]
        }
	}

}
const store = createStore(myreducer); // 2. putting redux in store variable 
                                      // 4. the function passes in the store via the reducer as arguments 

store.subscribe (() => { // This function will fire every time the state is changing 
    console.log('State updated');
    console.log(store.getState()); // this function will get our state
})

const todoAction = { type: 'ADD_TODO', todo: 'buy milk'}; // 6. setting the action : type + something in state
store.dispatch({type: 'ADD_TODO', todo: 'buy milk'}) // 7. setting the dispatching action 
store.dispatch({type: 'ADD_TODO', todo: 'sleep some more'})
store.dispatch({type: 'ADD_POST', post: 'today we will do it'})