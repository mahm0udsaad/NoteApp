import {Space } from 'antd';
import { useState } from 'react';
import Note from './note';
const Notes=({notes})=> {
return ( 
        <>
    <Space className='container' wrap>
        {notes && notes.map((note)=>(
            <Note 
            value={note.vlaue} 
            key={note.id}
            />
        ))}
   </Space>
   </>
)
}
export default Notes;