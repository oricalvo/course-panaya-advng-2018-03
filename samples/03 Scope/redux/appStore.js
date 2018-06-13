const initialState = {
    counter: 0,
}

function reducer(state, action) {
    console.log("reducer", state, action);

    if(action.type == "INC") {
        return {
            counter: state.counter + 1,
        }
    }
    else if(action.type == "DEC") {
        return {
            counter: state.counter - 1,
        }
    }

    return state;
}

const store = Redux.createStore(reducer, initialState);
