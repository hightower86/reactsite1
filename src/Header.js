import React from 'react';
//import { directive } from '@babel/types';

const Header = () => {
  return (
    <header class="flex justify-around bg-black-70  w-100 ph3 pv3 mb2 pv3-ns ph-m ph4-l">
      <nav class="f6 fw6 ttu tracked">
        <a class="link dim white dib mr3 ba br2 pa2" href="" title="Home">Домой</a>
        <a class="link dim white dib mr3  ba br2 pa2" href="" title="About">О компании</a>
        <a class="link dim white dib mr3 ba br2 pa2" href="#" title="Store">Магазин</a>
        <a class="link dim white dib mr3 ba br2 pa2" href="#" title="Contact">Контакты</a>
      </nav>
      <span className='white f3'>phone: +7 (908) 893-65-50</span>

    </header>
  )
}

export default Header;