'use strict';

document.querySelector('.nav-toggle').onclick = function () {
    this.classList.toggle('close-nav');
//    console.log(this);
    document.getElementById('navigation').classList.toggle('open');

}
document.querySelector('.navigation').onclick = function () {
    this.classList.toggle('close-nav');
    document.getElementById('navigation').classList.toggle('open');
}

/*function findActiveElement(e) {
    const activeElem = e.target;
}

const a_menu = document.getElementsByTagName('a').onclick = function () {

}



const childElement = document.querySelector('nav-href-section');

 */