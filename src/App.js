import React from 'react'
import './App.css';
import Header from './Header'
import Counter from './Counter'

class App extends React.Component {
    state = { count: 0 };

    increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
    };

    renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.state.count + upToNext}`;
    }

    render() {
    return (
        <div className="App">
        <Header renderDescription={this.renderDescription} />
        <Counter decrement={this.decrement} increment={this.increment} count={this.state.count} />
        </div>
    );
    }
}
export default App