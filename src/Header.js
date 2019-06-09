import React from 'react';
import { BrowserRouter, Router, HashRouter, Link, Route, NavLink } from 'react-router-dom';
//import { directive } from '@babel/types';
import Section1 from './Main';
import Its from './Its';
import Footer from './Footer';
import Contacts from './Contacts';
import App from './App';

const Header = () => {
  return (
    <BrowserRouter>
      <header class="w-100  flex items-center bg-black-90 h3 fixed">
        <nav class="fl w-100-m w-60-l pa2 vh-75-mf6 fw6 ttu tracked">
          <Link to='/' class="link white-60 mr3 pa1" href="" title="Home">1С Программы</Link>
          <Link to='/its' class="link white-60 mr3 pa1" href="" title="About">1С ИТС</Link>
          <Link to='/section1' class="link white-60 mr3 pa1" href="" title="Store">Section1</Link>
          <Link to='/contacts' class="link white-60 mr3 pa1" href="" title="Contact">Контакты</Link>
        </nav>
        <div className='flex justify-end fl w-100-m w-40-l pa1 white-80 f4-l f4-ns'>
          +7 (908) 893-65-50
        </div>
        <Route exact path="/" component={Contacts} />
        <Route path="/section1" component={Section1} />
        <Route path="/its" component={Its} />
      </header>
    </BrowserRouter>
    
  )
}

export default Header;