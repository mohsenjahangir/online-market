import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCartPlus, FaShopify } from 'react-icons/fa';
export const ModalSet = () => {
    const [show, setShow] = useState(false);
    const [items, setItems] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       <FaCartPlus />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FaShopify/></Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to add this product to your cart?</Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="primary" onClick={handleClose}>
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  
}
