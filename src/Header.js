import React from 'react';
//import { directive } from '@babel/types';

const Header = () => {
  return (
    <div className='h-100'>
      <div className="tc m3 pv4 pv5-ns bg-black-30">
        <h1 className='f1'>It's Header</h1>
      </div>
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