import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const Toasts = () => {
  const [isShown, setIsShown] = useState(true);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => {
    setShowA(!showA)
  };
  setTimeout(() => {
    setIsShown(false);
}, 3000);

  return (
    <div >
      {isShown ?<ToastContainer>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto btn-light text-danger">OnlineMarket</strong>
          </Toast.Header>
          <Toast.Body>Hi,welcome to your shop</Toast.Body>
        </Toast>
      </ToastContainer> :undefined}
      
    </div>

  )
}
