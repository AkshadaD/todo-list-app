import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import uuid from 'uuid';

export default class Todo extends Component{

    state = {
        items: [],
        id: uuid.v4(),
        item: 0
    };

    handleChange = (item) => {
        let updatedItems = this.state.items;
        updatedItems.push(item);
        this.setState({items:updatedItems, id:uuid.v4()});
    }

    deleteHandler(id){
        console.log("id is:" +id);
         let items = this.state.items;
         let index = items.findIndex( Delete => Delete.id === id )
         items.splice(index,1);
         this.setState({items:items});

    } 


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto mt-4">
                        <h3 className="text-capitalize text-center">
                            Todo Input
                        </h3>
                        <TodoInput
                            addItem={this.handleChange}
                        />
                        <TodoList items={this.state.items} 
                            onDelete={this.deleteHandler.bind(this)}
                            
                        />  
                        
                    </div>
                </div>
            </div>
        );
    }
}