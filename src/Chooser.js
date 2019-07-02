import React, { Component } from 'react';

class Chooser extends Component {

    render() {
        return (
            <form className="chooser">
                <label>
                    Name
                    <input type="checkbox" onChange={(e) => this.props.toggle('nameFlag', e)} />
                </label>
                <label>
                    Country
                <input type="checkbox" onChange={(e) => this.props.toggle('country', e)} />
                </label>
            </form>
        );
    };
};

export default Chooser;