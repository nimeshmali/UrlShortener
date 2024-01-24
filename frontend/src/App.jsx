import React from "react";
import { useState } from "react";
import axios from "axios";
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
  }

  return (
    <div className="App">
      <input type="text" placeholder="Enter Url" value={URL} onChange={(e)=>{
        setUrl(e.target.value);
      }}/>
      <button onClick={handleUrl} className="pt-3">generate</button>
      {newShortUrl !=="" ? <div>{newShortUrl}</div> : null}
    </div>
  );
}

export default App;
