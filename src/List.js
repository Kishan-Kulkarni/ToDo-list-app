import React, { useState } from "react";
import Form from "./Form"
import ListContent from "./ListContent";

function List(){
    const [listItem, setListItem]= useState('');
    const [items, setItems]=useState(["This is a todo list", "Change the title of the list", "Add task using the input feild given", "Click the task to delete it", "Please consider checking out my other projects"]);

    function onChange(e){
        setListItem(e.target.value)
    }

    function onClick(e){
        e.preventDefault()
        setItems([...items, listItem])
        setListItem('')
    }

    function deleteItem(e){
        setItems(items.filter((item,index)=>{
            return index!=e.target.id
        }))
    }

    return <div className="bg-white h-auto mb-16 pb-5 rounded">
        <Form 
            value={listItem}
            onChange={onChange}
            onClick={onClick}
        />

        <ListContent 
            items={items}
            deleteItem={deleteItem}
        />
    </div>
}

export default List