import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Trash } from 'react-feather';

const Cards = ({ cardData, onDelete }) => {
  const handleDeleteCard = () => {
    onDelete();
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body className="d-flex align-items-center">
          <h5 className="flex-grow-1">{cardData.title}</h5>
          <Trash onClick={handleDeleteCard} />
        </Card.Body>
        <Card.Img variant="top" src={cardData.image} />
        <Card.Body>
          <Card.Text>{cardData.text}</Card.Text>
          <Button variant="primary" onClick={console.log("edithandler")}>Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;

