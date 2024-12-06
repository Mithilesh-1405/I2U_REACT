import React from 'react';
import Modal from 'react-modal';

const PreviewModal = ({ isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      top: '12%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, 0)',
      width: '50%',
      height: '75vh',
      padding: '20px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#fff',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Preview Modal"
      ariaHideApp={false}
    >
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <button
          onClick={onRequestClose}
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            zIndex: 1
          }}
        >
          ×
        </button>
        <iframe
          src="https://i2u.ai/preview.html"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: 'white'
          }}
          title="Preview"
        />
      </div>
    </Modal>
  );
};

export default PreviewModal;
