import React, {Component} from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { connect, Provider } from "react-redux";
import { render } from 'react-dom';

const initialState = {
    count: 0,
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const incrementValue = () => ({
    type: INCREMENT,
})
const decrementValue = () => ({
    type: DECREMENT,
})
const resetValue = () => ({
    type: RESET,
})

const unit = 1;

const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            count: state.count + unit,
        }
    }
    if (action.type === DECREMENT) {
        let counter = 0;
        if (state.count > 0) {
            counter = state.count - unit;
        }
        return {
            count: counter,
        }
    }
    if (action.type === RESET) {
        return {
            count: 0,
        }
    }
    return state;
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Counter extends Component {

    render() {
        const { count, increment, decrement, reset } = this.props;
        return (
            <>
                <main className="Counter">
                    <p className="count">{count}</p>
                    <section className="controls">
                        <button onClick={increment}>Increment</button>
                        <button onClick={decrement}>Decrement</button>
                        <button onClick={reset}>Reset</button>
                    </section>
                </main>
            </>
        );
    }
}

const mapsStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment() {
            dispatch(incrementValue())
        },
        decrement() {
            dispatch(decrementValue())
        },
        reset() {
            dispatch(resetValue())
        },
    }
}

const CounterContainer = connect(
    mapsStateToProps,
    mapDispatchToProps
)(Counter)

render(
  <Provider store={store}>
      <CounterContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const prom = new Promise((resolve, reject) => {
//     resolve("OK")
// }).then((message) => {
//     // console.log("then")
// })