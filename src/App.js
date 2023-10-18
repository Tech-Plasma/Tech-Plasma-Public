import React from "react";
import { useState, useEffect } from "react";
export default function App () {
      const [text, setText] = useState('');
      return (
            <div className="container" style={
            {
                  padding:0,
                  margine:0,
            }
            }>
                  <div style={
                  {
                        background:"blue",
                        color:"white",
                        width:"100%",
                        position:"fixed",
                        top:"0%",
                        left:"0%",
                  }
                  }>
                        <center>
                              <h1>Welcome to may React App</h1>
                        </center>
                  </div>
                  <img src='./logo192.png' style={
                  {
                        width:"50%",
                        height:"80%",
                        position:"fixed",
                        top:'10%',
                        left:'25%',
                  }
                  }/>
            </div>
      );
}
