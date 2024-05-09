import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import BooksList from "./components/BooksList";

function App() {
  return (
    <div className="App">
      <LoginForm/>
        <BooksList/>
    </div>
  );
}

export default App;
