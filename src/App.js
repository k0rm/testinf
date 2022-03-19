import React, { useState } from 'react';

import { CartoonNetworkSpinner, Modal, Row, Col, Carousel } from './components';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
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
      </Row>
      <Carousel
        images={[
          "https://cdn-headshots.theathletic.com/nba/20000619.png",
          "https://cdn.vox-cdn.com/thumbor/bezVrxd0pVkU6u-ljbbT9nHsbL4=/0x0:2000x1233/1200x800/filters:focal(780x63:1100x383)/cdn.vox-cdn.com/uploads/chorus_image/image/66249489/lillian_1.0.jpg",
          "https://cdn.theathletic.com/app/uploads/2021/07/09160755/GettyImages-1198135683.jpg"
        ]}
        size={"medium"}
      />
    </div>
  );
}

export default App;
