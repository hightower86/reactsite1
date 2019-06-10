import React, { Component } from 'react';
import { BrowserRouter, Router, HashRouter, Link, Route, NavLink } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Header from './Header' ;
import Main from './Main';
import Its from './Its';
import Footer from './Footer';
import Contacts from './Contacts';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <header class="w-100 flex items-center h3 ph3">
          <nav class="">
            <Link to='/' class="link white-60 mr3 pa1" href="" title="Home">1С Программы</Link>
            <Link to='/its' class="link white-60 mr3 pa1" href="" title="About">1С ИТС</Link>
            <Link to='/its' class="link white-60 mr3 pa1" href="" title="Store">Магазин</Link>
            <Link to='/contacts'class="link white-60 mr3 pa1" href="" title="Contact">Контакты</Link>
          </nav>
          <div className='flex justify-end fl w-100-m w-40-l pa1 white-80 f4-l f4-ns'>
            +7 (908) 893-65-50
          </div>
          
        </header>
        <Route exact path="/" component={Main} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/its" component={Its} />
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
