import React, { Component } from 'react';
import { render } from 'react-dom';

import './App.css';
import './index.css';

class Counter extends Component {
    render() {
        return (
            <main className="Counter">
                <p className="count">0</p>
                <section className="controls">
                    <button>Increment</button>
                    <button>Decrement</button>
                    <button>Reset</button>
                    <button>Nothing</button>
                </section>
            </main>
        );
    }
}

export default Counter;