// import _ from 'lodash';
require('src/main.styl');
require('assets/favicon.ico');
import CanvasNest from 'canvas-nest.js';

const canvasConfig = {
	color: '0, 185, 229',
	pointColor: '0, 185, 229',
	count: 150,
	opacity: 1,
	zIndex: -2
};

const cn = new CanvasNest(document.querySelector('.background-canvas'), canvasConfig);
console.log(cn);


window.addEventListener('load', () => {

	setTimeout(() => {
		document.querySelector('.page').style.visibility = 'visible';
		document.querySelector('.page').classList.add('page--active');
		document.querySelector('.preloader').classList.add('preloader--hidden');
		document.querySelector('.background-canvas').classList.add('background-canvas--active');
	}, 1000);
});