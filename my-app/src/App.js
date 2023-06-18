import React, { useState } from 'react';
import NavbarExample from './NavBar/navbar.js';
import Board from './Components/Board.js';

import './App.css';

function App() {
  const [boards, setBoards] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [boardTitle, setBoardTitle] = useState('');

  const handleCreateNewBoard = () => {
    setShowForm(true);
  };

  const handleAddTitle = () => {
    if (boardTitle.trim() !== '') {
      const newBoard = {
        id: Date.now(), // Generate a unique ID for the board
        title: boardTitle,
      };
      setBoards(prevBoards => [...prevBoards, newBoard]);
      setBoardTitle('');
      setShowForm(false);
    }
  };

  const deleteBoard = boardId => {
    const updatedBoards = boards.filter(board => board.id !== boardId);
    setBoards(updatedBoards);
  };

  const searchHandler = e => {
    setSearchKey(e.target.value);
  };

  const searchBoards = boards.filter(board =>
    board.title.includes(searchKey)
  );

  return (
    <div>
      <div>
        <NavbarExample
          onCreateNewBoard={handleCreateNewBoard}
          onSearchHandler={searchHandler}
          searchKey={searchKey}
        />
      </div>
      <div className="app_outer">
        <div className="app_boards">
          {searchBoards.map(board => (
            <Board
              key={board.id}
              boardTitle={board.title}
              onDeleteBoard={() => deleteBoard(board.id)}
            />
          ))}
        </div>
        {showForm && (
          <form onSubmit={handleAddTitle}>
            <div className="board_form_popup">
              <div className="board_form">
                <h3>Add Title</h3>
                <input
                  type="text"
                  placeholder="Enter board title"
                  value={boardTitle}
                  onChange={e => setBoardTitle(e.target.value)}
                />
                <button type="submit">Add Title</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
