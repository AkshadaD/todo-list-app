import React, {Component} from 'react';
import TodoItem from './TodoItem';

 class TodoList extends Component {

    // deleteHandler(id) {
    //     console.log("id is:" +id);
    //      let items = this.props.items;
    //      let index = items.findIndex(Delete => Delete.id === id);
    //      items.splice(index,1);
    //      this.setState({items:items});

    // }   
    deleteItem(id){
        this.props.onDelete(id);
    }

    
    render() {
        let items;

        if(this.props.items){
            items = this.props.items.map(item => {
                return (<TodoItem 
                            onDelete={this.deleteItem.bind(this)} 
                            key={item} item={item} 
                             /> ); //deleted={() => this.props.onDelete()}
            });
        }

        return (
            <ul className="list-group my-5">
                <h3 className="text-center">ToDo List</h3>
                {items}
                <button type="button" className="btn btn-danger btn-block mt-5">Clear List</button> 
            
            </ul>

        );
    }
    
}

export default TodoList;