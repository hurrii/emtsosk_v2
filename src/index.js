// import _ from 'lodash';
require('src/main.styl');
require('assets/favicon.ico');


window.addEventListener('load', () => {

	setTimeout(() => {
		document.querySelector('.page').style.visibility = 'visible';
		document.querySelector('.page').classList.add('page--active');
		document.querySelector('.preloader').style.visibility = 'hidden';
	}, 1000);
});