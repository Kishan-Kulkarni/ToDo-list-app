import React from "react";

function Form(props){
    return <div className="pt-2 px-1 mb-8 xl:pl-1">
        <form className="xl:flex xl:w-full">
            <input type="text" name="listItem" placeholder="Please enter task" className="w-full mb-3 text-center h-10 rounded-full border-2 xl:w-4/5 xl:mb-0 xl:w-4/5" value={props.value} onChange={props.onChange} autoComplete="off"/>
            <div className="flex flex-col items-center xl:block xl:w-1/6 xl:mx-1">
            <button type="submit" className="w-1/3 text-centre mx-2 bg-purple-500 text-white  h-10 rounded-full xl:mx-0 xl:w-full" onClick={props.onClick}>Add</button>
            </div>
        </form>
    </div>
}

export default Form
