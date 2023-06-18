import React, { useState } from 'react';
import NavbarExample from './NavBar/navbar.js';
import Board from './Components/Board.js';

import "./App.css";

function App() {
  const [boards, setBoards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [boardTitle, setBoardTitle] = useState('');

  const handleCreateNewBoard = () => {
    setShowForm(true);
  };

  const handleAddTitle = () => {
    if (boardTitle.trim() !== '') {
      setBoards(prevBoards => [...prevBoards, <Board key={prevBoards.length} boardTitle={boardTitle} />]);
      setBoardTitle('');
      setShowForm(false);
    }
  };

  return (
    <div>
      <div>
        <NavbarExample onCreateNewBoard={handleCreateNewBoard} />
      </div>
      <div className="app_outer">
        <div className="app_boards">
          {boards}
        </div>
        {showForm && (
          <div className="board_form_popup">
            <div className="board_form">
              <h3>Add Title</h3>
              <input
                type="text"
                placeholder="Enter board title"
                value={boardTitle}
                onChange={(e) => setBoardTitle(e.target.value)}
              />
              <button onClick={handleAddTitle}>Add Title</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
