import React from 'react';
import Modal from 'react-modal';
import '../styling/reservationModal.scss';

Modal.setAppElement('#root');

const SignupModal = ({ isOpen, onClose }) => {
  const customStyles = {
    content: {
      top: '10%',
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
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Signup Modal"
    >
      <div className="modal-header" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '30px' }}>
        <button onClick={onClose} className="close-button">×</button>
      </div>
      <div className="modal-content">
        <iframe
          src="https://i2u.ai/userRegistration.html"
          width="100%"
          height="100%"
          title="Signup Form"
          frameBorder="0"
        />
      </div>
    </Modal>
  );
};

export default SignupModal;
