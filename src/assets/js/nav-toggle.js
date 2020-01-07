'use strict';

document.querySelector('.nav-toggle').onclick = function() {
  this.classList.toggle('close-nav');
  document.querySelector('navigation').classList.toggle('open');
}
