import React from "react";
import ReactDOM from 'react-dom/client';
import "./style.css";
import { useState, useEffect } from "react";
import { useReducer } from "react";
import { useCallback } from "react";



class XSearch extends HTMLElement {
      connectedCallback() {
            const mousePoint = document.createElement('span')
            this.attachShadow({ mode : 'open' }).appendChild(mousePoint)

            const name = this.getAttribute('name')
            const url = 'https://www.google.com/search?q=' + encodeURIComponent(name)
            const root = ReactDOM.createRoot(mousePoint)
            root.render(<a href={url}>{name}</a>)
      }
}
customElements.define('x-search', XSearch)

const initialState = {count: 0}
function Hooks() {
      
}
function reducer(state, action) {
      switch (action.type) {
            case 'increment':
                  return {count: state.count+1};
            case 'decrement':
                  return {count: state.count-1};
            default:
                  throw new Error();
      }
}

function Dispatch() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
            <>
                 <div className="state-login">
                        <div >
                              <button onClick={() => {
                                    dispatch({type: 'increment'});
                                    alert(`Your Dispatch get's one value of increment!\n Your Dispatch : ${state.count}`);
                                    alert('Sorry This page is under Constructio')
                              }} className="login-button">Login </button>
                        </div>
                  </div>
            </>
      )
}

export default class App extends React.Component {     
      render() {
            return (
                  <>
                        ${Hooks()}
                        <div className="hedder">
                              <h1>Plasma Birds Studios</h1>
                              <div className="comment-head">
                                    <p>By: Srisank Shaurya</p>
                              </div>
                        </div>
                        <Dispatch></Dispatch>
                  </>
            )
      }
}