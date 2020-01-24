import React from 'react';

 class Example extends React.Component {

    constructor() {
        super();
        this.state = {
            msg: null
        };
      }
      
    showHello() {
    this.setState({msg: 'Helloo'});
    }

    render() {
        return (
            <div>
                <p> {this.state.msg} </p>
                <button onClick={this.showHello.bind(this)}>click here</button>
            </div>

        );
    }
 }

export default Example;