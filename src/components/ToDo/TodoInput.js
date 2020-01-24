import React, { Component } from 'react';

 class TodoInput extends Component  {

    state = {
        newItem: null
    }

    handleSubmit(e) {

        if(this.refs.item.value === '' ){
            alert("Please insert input");
        }
        else{
            this.setState(
                {newItem:this.refs.item.value},
                function (){
                    this.props.addItem(this.state.newItem);
                });
        }

        e.preventDefault();
    }
    
    render() {
        return (
            <div className="card card-body my-3">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-group">
                        {/* <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div> */}
                        <input type="text" ref="item" className="form-control text-center" placeholder="insert todo item"/>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3">Add item</button>
                </form>
                
            </div>
        );
    }
    
}

export default TodoInput;