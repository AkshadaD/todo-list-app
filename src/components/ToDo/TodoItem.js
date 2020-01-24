import React from 'react';


 const todoItem = (props) => {
    
    const deleteItem = (id) => {
        console.log("test");
        props.onDelete(id);
    }

    const todoDone = () => {
        document.getElementById('item').style.textDecoration = "line-through";
    }
    
    return (
        <li className="list-group-item d-flex justify-content-between my-2">
            <h5 className="text-center" id="item"> {props.item} </h5> <br />
            <div className="todo-icon">
                

                {/* <span className="mx-2 text-success">
                    <i className="fas fa-pen">edit</i>
                </span> */}

                {/* <span className="mx-2 text-danger">
                    <i className="fas fa-trash">delete</i>
                </span> */}
                <button className="btn btn-outline-danger btn-sm" onClick={()=> todoDone()}>Done</button>
                <button className="btn btn-outline-danger btn-sm" onClick={()=>deleteItem(props.id)}>Delete</button>
            </div>
        </li>
    );
    
}

export default todoItem;