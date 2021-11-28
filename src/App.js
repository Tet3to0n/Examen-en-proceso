import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://www.breakingbadapi.com/api/";

export async function envAPI(endpoint) {
  try {
    const response = await axios({
      url: `${BASE_URL}${endpoint}`,
      method: `GET`,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}


function App() {
  const response = async (endp) => envAPI(endp);
  const [dataRe, setdataRe] = useState(null);
  
  

useEffect(() => {
   async function loadapi() {
      const resp = await response("characters");
    const data = resp?.data;  
    setdataRe(data);
    //console.log(resp)
   }
   loadapi();
   return function cleanup() {
   loadapi();
   }
   }, []);

   console.log (dataRe !== null ? dataRe : "es null");



   return (
    <div className="App">
      <header className="App-header">
        {dataRe !== null ? (
          <div className="grilla">
            {dataRe.map((item) => {
              console.log(item);
              return (
                <div className="Card">
                  <h1 className="h1nombre">{item.name}</h1>
                  <img
                    className="avatar"
                    alt="imagen personaje"
                    src={item.img}
                  />
                  <div className="div1">
                    <p className="datosP">{item.birthday}</p>
                    <h2 className="datosP">{item.status}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <img alt="logo" src={logo} />
        )}
      </header>
    </div>
  );
}

export default App;