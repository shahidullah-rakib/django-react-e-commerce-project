import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteConfirmModal({
  show,
  handleClose,
  modalTitle,
  modalBody,
  primaryButtonLabel,
  handlePrimaryAction,
}) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handlePrimaryAction}>
          {primaryButtonLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteConfirmModal;
