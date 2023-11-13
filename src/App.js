import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App d-flex">
      <div className='container total'>
        <h1 className='mt-2 fw-bold mb-5'>کتابخانه من</h1>
        <nav style={{ borderBottom: "3px solid", paddingBottom: "2rem 0" }} className='nav mb-5'>
          <Link to="/books" className='nav-item px-10 mx-5 text-decoration-none'>کتاب ها</Link> {"  "}
          <Link to="/about" className='nav-item px-10 mx-5 text-decoration-none'>درباره ما</Link>

        </nav>
        
          
        
        <Outlet />
        
      </div>

    </div>
  );
}

export default App;
