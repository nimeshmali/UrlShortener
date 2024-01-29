import React from "react";

const Input = (props)=>{
    return(
        <div className="mt-11 flex justify-center h-10">
            <input type="text" placeholder="Enter Url" className="w-3/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.URL} onChange={(e)=>{
                props.setUrl(e.target.value);
            }}/>
            <button onClick={props.handleUrl} className="ml-3 text-white bg-gray-800 hover:bg-gray-900 font-semibold rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Generate</button>    
        </div>
    )
}

export default Input;