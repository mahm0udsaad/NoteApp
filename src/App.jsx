import React,{useState} from 'react';
import Notes from '../components/notes';
import {Button} from 'antd';
import {PlusSquareOutlined} from '@ant-design/icons'

import './index.css'

function App(props) {
const [notes, setNotes]=useState([])

  function addNote() {
    setNotes([...notes,{id:notes.length+1, value:''}])
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