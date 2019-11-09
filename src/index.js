// import _ from 'lodash';
require('src/main.styl');
require('assets/favicon.ico');
require('src/js/canvas-bg.js');

window.addEventListener('load', () => {

	setTimeout(() => {
		document.querySelector('.page').style.visibility = 'visible';
		document.querySelector('.page').classList.add('page--active');
		document.querySelector('.preloader').classList.add('preloader--hidden');
		document.querySelector('.background-canvas').classList.add('background-canvas--active');
	}, 200);
});