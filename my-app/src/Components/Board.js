import React, { useState } from 'react';
import './Board.css';
import { Trash} from 'react-feather';
import Card from './Card';

const Board = (props) => {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [cardData, setCardData] = useState({
    title: '',
    image: '',
    text: '',
    buttonText: ''
  });

  const addNewCard = () => {
    const newCard = <Card key={cards.length} cardData={cardData} onDelete={() => deleteCard(cards.length)} />;
    setCards(prevCards => [...prevCards, newCard]);
    resetForm();
    setShowForm(false);
  };

  const deleteCard = index => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleFormInputChange = e => {
    const { name, value } = e.target;
    setCardData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const resetForm = () => {
    setCardData({
      title: '',
      image: '',
      text: '',
      buttonText: ''
    });
  };

  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">{props.boardTitle}</p>
        <Trash />
      </div>

      <div className="board_cards">
        {cards}
        <button className="add_card_button" onClick={() => setShowForm(true)}>
          Add New Post
        </button>
      </div>

      {showForm && (
        <div className="card_form_popup">
          <div className="card_form">
            <h3>Add New Post</h3>
            <input type="text" name="title" placeholder="Title" value={cardData.title} onChange={handleFormInputChange} />
            <input type="text" name="image" placeholder="Image URL" value={cardData.image} onChange={handleFormInputChange} />
            <input type="text" name="text" placeholder="Text" value={cardData.text} onChange={handleFormInputChange} />
            <input
              type="text"
              name="buttonText"
              placeholder="Button Text"
              value={cardData.buttonText}
              onChange={handleFormInputChange}
            />
            <button onClick={addNewCard}>Create Card</button>
            <button onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
