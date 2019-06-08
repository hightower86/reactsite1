import React from 'react';
//import { directive } from '@babel/types';

const Header = () => {
  return (
    <header class="w-100 flex items-center bg-black-90 h3 ph3">
      <nav class="fl w-100-m w-60-l pa2 vh-75-mf6 fw6 ttu tracked">
        <a class="link white-60 mr3 pa1" href="" title="Home">1С Программы</a>
        <a class="link white-60 mr3 pa1" href="" title="About">1С ИТС</a>
        <a class="link white-60 mr3 pa1" href="" title="Store">Магазин</a>
        <a class="link white-60 mr3 pa1" href="" title="Contact">Контакты</a>
      </nav>
      <div className='flex justify-end fl w-100-m w-40-l pa1 white-80 f4-l f4-ns'>
        +7 (908) 893-65-50
      </div>

    </header>
  )
}

export default Header;