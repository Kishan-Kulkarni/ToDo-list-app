import React from "react";

function Form(props){
    return <div className="pt-2 pl-1 mb-8">
        <form >
            <input type="text" name="listItem" placeholder="Please enter task" className="w-4/5 text-center h-10 rounded-full border-2" value={props.value} onChange={props.onChange} autoComplete="off"/>
            <button type="submit" className="text-centre mx-2 bg-purple-500 text-white w-1/6 h-10 rounded-full" onClick={props.onClick}>Add</button>
        </form>
    </div>
}

export default Form