import React from 'react';
//import { directive } from '@babel/types';

const Header = () => {
  return (
    <header class="flex items-center bg-black-70 h4 ph3 pv3 mb2 pv3-ns ph-m ph4-l">
      <nav class="fl w-100 w-70-ns pa2 f6 fw6 ttu tracked">
        <a class="link dim white dib mr3 ba br2 pa2" href="" title="Home">Домой</a>
        <a class="link dim white dib mr3  ba br2 pa2" href="" title="About">О компании</a>
        <a class="link dim white dib mr3 ba br2 pa2" href="#" title="Store">Магазин</a>
        <a class="link dim white dib mr3 ba br2 pa2" href="#" title="Contact">Контакты</a>
      </nav>
      <div className='fl w-100 w-30-ns pa2 white f3'>
        phone: +7 (908) 893-65-50
      </div>

    </header>
  )
}

export default Header;