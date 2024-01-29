import React from "react";
import SlCopyButton from '@shoelace-style/shoelace/dist/react/copy-button';
import  SlIcon  from '@shoelace-style/shoelace/dist/react/icon';
const NewUrl = (props)=>{
    return (
        <div className="mt-8">
            {props.newShortUrl !=="" ? <div className="flex justify-center">
                <h3 className="bg-gray-700 text-gray-100 pt-1 rounded mr-1.5 px-3">{props.newShortUrl}</h3>
                
                <SlCopyButton value="Copied from a custom button" className="ml-1.5" onClick={() =>  navigator.clipboard.writeText(props.newShortUrl)}>
                    <SlIcon slot="copy-icon" name="clipboard" />
                    <SlIcon slot="success-icon" name="clipboard-check" />
                    <SlIcon slot="error-icon" name="clipboard-x" />
                </SlCopyButton>
            </div> : null}
            
        </div>
    )
}

export default NewUrl;