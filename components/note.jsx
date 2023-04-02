import { Button, Modal, Input } from 'antd';
import { useEffect, useState ,useRef} from 'react';

const { TextArea } = Input;

const Note=()=> {
  const [visible, setVisible] = useState(false);
  const [bgColor , setBgColor] = useState()
  const [value, setValue] =useState('')
  const textAreaRef = useRef(null)

  useEffect(() => {
    if (visible && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [visible]);

  const handleClick = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
     <TextArea
          style={{ backgroundColor: bgColor }}
          value={value}
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
        bodyStyle={{ height: '50vh' }}
      >
 
        <TextArea
          ref={textAreaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Start Typing"
          autoSize={{ minRows: 10, maxRows: 6 }}
          onClick={handleClick}
          className='textArea'
        />
      </Modal>
    </>
  );

  };
export default Note;