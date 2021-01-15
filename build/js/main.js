// // data vars
// var data;

// // loads json content
// const loadJSON = (callback) => {
// 	var xobj = new XMLHttpRequest();
// 	xobj.overrideMimeType('application/json');
// 	xobj.open('GET', '../data/menu.json', true);
// 	xobj.onreadystatechange = function () {
// 		if (xobj.readyState == 4 && xobj.status == '200') {
// 			callback(xobj.responseText);
// 		}
// 	};
// 	xobj.send(null);
// 	console.log(xobj);
// };

// const loadMenu = ({ pizzas, specials, addons }) => {
// 	const pizzaMenu = document.getElementById('pizza-menu');
// 	const specialsMenu = document.getElementById('specials-menu');

// 	console.log(addons);
// 	pizzas.map((pizza) => {
// 		var node = document.createElement('LI');
// 		node.innerHTML = `<div class="menu-item-name">${pizza.name}</div><span class="menu-item-price">${pizza.price}</span><p class="menu-item-description">${pizza.desc}</p>`;
// 		pizzaMenu.appendChild(node);
// 	});
// 	var addonItems = document.createElement('LI');
// 	addonItems.innerHTML = ` <div class="menu-item-name">תוספות</div><p class="menu-item-description">${addons.addonsFirstLine}<span class="menu-item-price addons">${addons.priceFirstLine}</span><span class="addons-price">${addons.priceFirstLine}</span></p><p class="menu-item-description">${addons.addonsSecondLine}<span class="menu-item-price addons">${addons.priceSecondLine}</span><span class="addons-price">${addons.priceSecondLine}</span></p>`;
// 	pizzaMenu.appendChild(addonItems);
// 	specials.map((special) => {
// 		var node = document.createElement('LI');
// 		node.innerHTML = `<div class="menu-item-name">${special.name}</div><span class="menu-item-price">${special.price}</span><p class="menu-item-description">${special.desc}</p>`;
// 		specialsMenu.appendChild(node);
// 	});
// };

// // initialize data vars
// const init = () => {
// 	loadJSON(function (response) {
// 		data = JSON.parse(response);
// 		loadMenu(data.menu);
// 	});
// };

// init();

// old stuff
gsap.to('.overlay', 2, {
    delay: 1,
    top: '-200%',
    ease: 'Expo.easeInOut',
});
gsap.from('.nav-wrapper li', 0.5, {
    delay: 3,
    y: -100,
    opacity: 0,
    ease: 'power3',
    stagger: {
        amount: 0.3,
    },
});

gsap.from('.mobile-nav', 1, {
    opacity: 0,
    ease: 'Expo.easeInOut',
});

$(document).ready(function () {
    'use strict';

    //Scroll back to top

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
});

// $(document).ready(function () {
// 	$('#lightSlider').lightSlider();
// });
// //
// $(document).ready(function () {
// 	$('#autoWidth').lightSlider({
// 		autoWidth: true,
// 		loop: true,
// 		onSliderLoad: function () {
// 			$('#autoWidth').removeClass('cS-hidden');
// 		},
// 	});
// });

// scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300,
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600,
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600,
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600,
});

sr.reveal('.animate-bottom-delay', {
    origin: 'bottom',
    duration: 1000,
    distance: '3rem',
    delay: 900,
});

$('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {
        burgerTime();
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            $('.mbl-nav-wrapper').removeClass('mbl-nav-open');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            $('.mbl-nav-wrapper').addClass('mbl-nav-open');
            isClosed = true;
        }
    }
});
