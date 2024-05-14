import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import BooksList from "./components/BooksList";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import LoansPage from "./components/LoansList";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Navigate to="/login" />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/books" element={<BooksList />} />
                  <Route path="/home" element={<HomePage />}/>
                  <Route path="/loans" element={<LoansPage />} />
              </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
