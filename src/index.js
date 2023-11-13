import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Books from './Components/Books';
import Book from './Components/Book';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />} >
            <Route
            index
            element={
              <main>
                <p className='fw-bold mt-5'>کتاب مورد نظر خود را انتخاب کنید</p>
              </main>
            } />
            <Route path=':bookId' element={<Book />} />
          </Route>
          <Route path='*' element={
            <main><p className='fw-bold mt-5'>این کتاب فعلا موجود نیست دوست من .</p></main>
          }/>
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


