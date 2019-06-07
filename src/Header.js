import React from 'react';
//import { directive } from '@babel/types';

const Header = () => {
  return (
    <header class="flex items-center bg-black-70 h4 ph3 mb2">
      <nav class="fl w-100 w-60-m pa2 vh-75-mf6 fw6 ttu tracked">
        <a class="link dim white dib mr3 ba br2 pa2" href="" title="Home">Домой</a>
        <a class="link dim white dib mr3  ba br2 pa2" href="" title="About">О компании</a>
        <a class="link dim white dib mr3 ba br2 pa2" href="#" title="Store">Магазин</a>
        <a class="link dim white dib mr3 ba br2 pa2" href="#" title="Contact">Контакты</a>
      </nav>
      <div className='flex justify-end fl w-100 w-40-m pa2 white f3-l f4-ns'>
        phone: +7 (908) 893-65-50
      </div>

    </header>
  )
}

export default Header;