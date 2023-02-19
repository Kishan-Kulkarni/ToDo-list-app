import React from "react";
import Title from "./Title"
import List from "./List"

function Content(){
    return <div className="px-5 w-screen flex-col bg-blue-200 items-center justify-center xl:mx-auto xl:w-1/3 ">
        <Title />
        <List /> 
    </div>
}

export default Content
