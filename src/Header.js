import React from 'react';
//import { directive } from '@babel/types';

const Header = () => {
  return (
    <div>
      <header class="bg-black-70 fixed w-100 ph3 pv3 pv4-ns ph4-m ph4-l">
        <nav class="f6 fw6 ttu tracked">
          <a class="link dim white dib mr3 ba br2 pa2" href="" title="Home">Домой</a>
          <a class="link dim white dib mr3  ba br2 pa2" href="" title="About">О компании</a>
          <a class="link dim white dib mr3 ba br2 pa2" href="#" title="Store">Магазин</a>
          <a class="link dim white dib ba br2 pa2" href="#" title="Contact">Контакты</a>
        </nav>
      </header>
      <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
        <h1 class="mt0">Centered Container</h1>
        <p class="lh-copy measure">
          Combine width or max-width values with the center class to create a centered
          container for your content.
        </p>
      </section>
    </div>
  )
}

export default Header;