import React from "react";
import { useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import NewUrl from "./components/NewUrl"; 

// App.jsx
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.13.1/cdn/');


function App() {
  const [URL,setUrl] = useState("");
  const [newShortUrl,setNewShortUrl]=useState("");
  const handleUrl = async()=>{
    if(URL!==""){
      const response = await axios.post("http://localhost:5000/url",{
        url: URL,
      }
      ).then((res)=>{
        console.log(res.data.newShortUrl);
        setNewShortUrl(res.data.newShortUrl);
      });
    }
    setUrl("");
  }

  return (
    <div className="mt-44 w-4/6 ">
      <h1 className="flex justify-center text-4xl font-semibold">Url Shortener</h1>
      <Input URL ={URL} setUrl = {setUrl} handleUrl={handleUrl}/>
      <NewUrl newShortUrl = {newShortUrl}/>
      
    </div>
  );
}

export default App;
