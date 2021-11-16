/*eslint-env es6*/
/*global document*/

const hamburger = document.getElementById('hamburger');
const HomeList = document.getElementById('HomeList');

hamburger.addEventListener('click', () => {
    HomeList.classList.toggle('show');
});