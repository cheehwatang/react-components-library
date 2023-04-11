import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} danger outline>
        Close
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Hello World!</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary outline rounded>
        Show Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
