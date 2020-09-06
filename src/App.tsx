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
      <JsonEditor value={json} themeBgColor={"bull"} />
    </div>
  );
}

export default App;
