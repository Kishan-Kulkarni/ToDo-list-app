import React from "react";

function ListContent(props){
    return <div>
        <ul role="list" className="list-disc ml-5">
        {props.items.map((item, index) => {
            return <li key={index} id={index} className="my-1 ml-3 text-lg cursor-pointer" onClick={props.deleteItem}>{item}</li>
        })}
        </ul>
    </div>
}

export default ListContent