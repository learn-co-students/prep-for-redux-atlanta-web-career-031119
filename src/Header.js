import React from 'react'
import './App.css'
import logo from './logo.svg'

class Header extends React.Component {
    render() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.props.renderDescription()}</h3>

        </header>
        );
    }
}

export default Header