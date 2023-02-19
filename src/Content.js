import React from "react";
import Title from "./Title"
import List from "./List"

function Content(){
    return <div className="flex-col bg-blue-200 items-center justify-center mx-auto w-1/3">
        <Title />
        <List /> 
    </div>
}

export default Content