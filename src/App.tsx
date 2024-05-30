import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import BooksList from "./components/BooksList";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import LoansPage from "./components/LoansList";
import ApiProvider from "./api/ApiProvider";
import UsersList from "./components/UsersList";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <ApiProvider>
                  <Routes>
                      <Route path="/" element={<Navigate to="/login"/>}/>
                      <Route path="/login" element={<LoginForm/>}/>
                      <Route path="/api/books" element={<BooksList/>}/>
                      <Route path="/api/home" element={<HomePage/>}/>
                      <Route path="/api/loans" element={<LoansPage/>}/>
                      <Route path="/api/users" element={<UsersList/>}/>
                  </Routes>
            </ApiProvider>
            </BrowserRouter>
      </div>
  );
}

export default App;
