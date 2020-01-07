'use strict';

window.onscroll = function() {headerFixed()};

function headerFixed() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = "fixed";
  } else {
    document.getElementById("header").className = "";
  }
}


