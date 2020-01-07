'use strict';

document.querySelector('.nav-toggle').onclick = function() {
  this.classList.toggle('close-nav');
  console.log(this);
  document.getElementById('navigation').classList.toggle('open');
}
