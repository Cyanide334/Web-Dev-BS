
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Moydal} from 'react-bootstrap'
import  Navbar  from '../Header/Navbar';
import  Search  from '../Content/Search';
import  Breadcrumbs  from '../Content/Breadcrumbs';
import Banner from '../Content/Banner'
import Listings from '../Content/Listings';
import Filter from '../Content/Filter';
import Login from '../Content/Login';
import Signup from '../Content/Signup';
import 'font-awesome/css/font-awesome.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import {faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass,faLocationDot,faAnglesLeft,faAngleLeft, faAnglesRight,faAngleRight );
function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);
  return (
    <>
    <Login show={showLogin} onHide={handleCloseLogin} />
    <Signup show={showSignUp} onHide={handleCloseSignUp}/>
    <div className="App">
      
      <Navbar onLogin={handleShowLogin} onSignUp={handleShowSignUp}/>
      <Banner/>
      <section className="text-start text-muted m-2">
          <Breadcrumbs />
      </section>
      <div className="container " style={{ maxWidth: 1260 + 'px' }}>  
        <div className="row my-3 bg-white shadow-sm">
          <Search />
          
        </div>

          <div className="row">  
              <Filter/>
              <Listings />           
          </div>
      </div>

    </div>
    </>
  );
}

export default App;
