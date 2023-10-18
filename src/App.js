import React from "react";
import { useState, useEffect } from "react";
export default function App () {
      const [text, setText] = useState('');
      return (
            <>
                  <h1>Under constriction</h1>
            </>
      );
}
const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<App />)
