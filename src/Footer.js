import React from 'react';

const Footer = () => {
  return (
    <footer class="pv4 ph3 ph5-m ph6-l light-gray bg-black">
      <small class="f6 db tc">© 2003 <b class="ml2 ttu">компания "Софтмакс"</b>., Все права защищены</small>
      <div class="tc mt3">
        <a href="/language/" title="Language" class="f6 dib ph2 link mid-gray dim">Language</a>
        <a href="/terms/"    title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</a>
        <a href="/privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
      </div>
    </footer>
  );
}

export default Footer;