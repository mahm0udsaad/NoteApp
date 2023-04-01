import React,{useState} from 'react';
import Notes from './component/notes';
import {Button} from 'antd';
import {PlusSquareOutlined} from '@ant-design/icons'

import './index.css'

function App() {
  const [notes, setNotes] = useState([{id:1,value:''}]);

  function addNote() {
    setNotes([{id:notes.length+1, value:''},...notes]);
  }
  
  return (
    <div className="bg-gray-100 p-5">
      <div className="head">
        <h1 className='title'>Note App</h1>
        <Button 
          onClick={addNote} 
          type='primary' 
          icon={<PlusSquareOutlined />} 
          size={'large'} 
        />
      </div>
      <Notes notes={notes}/>
    </div>
  );
}

export default App;
