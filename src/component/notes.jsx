import {Space } from 'antd';
import Note from './note';

const Notes = (props) => {

  return ( 
    <>
      <Space className='container' wrap>
        {props.notes && props.notes.map((note)=>(
          <Note value={note.value} key={note.id}/>
        ))}
      </Space>
    </>
  );
}

export default Notes;