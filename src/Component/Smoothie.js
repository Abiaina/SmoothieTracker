import React, {Component} from 'react';

export default class Smoothie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
        }
    }

    // Can only set state in a function, why? idk..
    toggleIsHidden () {
        this.setState((currentState)=> ({
            isHidden: !currentState.isHidden,
        }));
    }

    render () {
        return (
            <div>
    <button onClick={() => this.toggleIsHidden()}>{this.state.isHidden ? this.props.name : this.props.name}</button>
                {!this.state.isHidden && this.props.ingredients}
            </div>
        )
    }
}