import React, { Component } from 'react';
import './App.css';
import { subscribeToTimer } from './api'
import Chooser from './Chooser'

class App extends Component {

    state = {
        name: 'No data yet',
        address: 'No data yet',
        nameFlag: false,
        country: false
    };

    componentDidMount() {
        subscribeToTimer((err, dataFromServer) => {
            this.setState({ name: dataFromServer.name, address: dataFromServer.address })
        });
    };

    toggle = (name, e) => {
        this.setState({ [name]: e.target.checked })
    };

    render() {


        return (
            <div className="App">
                <header className="App-header">
                    <Chooser
                        toggle={this.toggle}
                    />
                    <div className="App">
                        <p>Your data:</p>
                        {this.state.nameFlag && <span className="App-intro">
                            {this.state.name}
                        </span>}
                        {this.state.country &&
                            <span className="App-intro">
                                {this.state.nameFlag && <span>&nbsp;-&nbsp;</span>}
                                {this.state.address}
                            </span>}
                        {!this.state.nameFlag && !this.state.country && <p>Choose data</p>}
                    </div>
                </header>
            </div>

        );

    };

};

export default App;
