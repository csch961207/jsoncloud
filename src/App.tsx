import React from 'react';
import './App.css';
import { Button } from 'antd';
import JsonEditor from './JsonEdit';

function App() {
  let json = {
    "name": "123"
  }
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <div className="" style={{ margin: "250px", marginTop: "50px" }}>
        <JsonEditor value={json} />
      </div>
    </div>
  );
}

export default App;
