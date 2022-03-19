import React, { useState } from 'react';

import { CartoonNetworkSpinner, Modal, Row, Col } from './components';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <button onClick={() => setIsOpen(true)}>
        asgasgasg
      </button>

      <CartoonNetworkSpinner
        interval={4}
      />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Modal.Title>YEAHHH</Modal.Title>
        <Modal.Body>YESS</Modal.Body>
        <Modal.Footer>ASHJDIAHJSDIASd</Modal.Footer>
      </Modal>
      <Row>
        <Col
          size={4}
        />
        <Col
          size={4}
        />
        <Col
          size={4}
        />
        <Col size={6} />
        <Col size={6} />
      </Row> */}
    </div>
  );
}

export default App;
