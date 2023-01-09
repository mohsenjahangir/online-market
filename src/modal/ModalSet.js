import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCartPlus, FaShopify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { mostviews } from '../data/Data';
export const ModalSet = ({ add, item }) => {
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
          <Modal.Title><FaShopify /></Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to add this product to your cart?</Modal.Body>
        <Modal.Footer >
          
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          

          <Link onClick={handleClose}>
            <Button variant="primary" onClick={() => add(item.id)}>
              Add to cart
            </Button>
          </Link>

          <Link to='./cart'>
            
              <Button variant="warning" onClick={() => add(item.id)}>
                Add and go to cart
              </Button>
            
          </Link>

        </Modal.Footer>
      </Modal>
    </>
  );

}
