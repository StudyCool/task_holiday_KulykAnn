'use strict';

document.querySelector('.nav-toggle').onclick = function() {
  this.classList.toggle('close-nav');
  document.getElementById('navigation').classList.toggle('open');
}
