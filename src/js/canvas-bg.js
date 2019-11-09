import CanvasNest from 'canvas-nest.js';

const el = document.querySelector('.background-canvas');

const canvasConfig = {
	color: '0, 185, 229',
	pointColor: '0, 185, 229',
	count: 150,
	opacity: 1,
	zIndex: -2
};

const cn = new CanvasNest(el, canvasConfig);
console.log(cn);