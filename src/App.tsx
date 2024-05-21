import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import BooksList from "./components/BooksList";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import LoansPage from "./components/LoansList";
import ApiProvider from "./api/ApiProvider";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <ApiProvider>
                  <Routes>
                      <Route path="/" element={<Navigate to="/login"/>}/>
                      <Route path="/login" element={<LoginForm/>}/>
                      <Route path="/books" element={<BooksList/>}/>
                      <Route path="/home" element={<HomePage/>}/>
                      <Route path="/loans" element={<LoansPage/>}/>
                  </Routes>
            </ApiProvider>
            </BrowserRouter>
      </div>
  );
}

export default App;
