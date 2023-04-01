
import { Button, Modal, Input } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

const Note=()=> {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('')
  const handleClick = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  // style 
const textAreaStyle={
  ouline:'none',
  height:'100% !important',
  border:'none'
}
  return (
    <>
     <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Start Typing"
          autoSize={{ minRows: 3, maxRows: 6 }}
          onClick={handleClick}
        />
      <Modal
        open={visible}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={null}
        maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        bodyStyle={{ height: '90vh' }}
      >
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Start Typing"
          autoSize={{ minRows: 10, maxRows: 6 }}
          onClick={handleClick}
          style={textAreaStyle}
          className='textArea'
          autoFocus
        />
      </Modal>
    </>
  );

  };
export default Note;
