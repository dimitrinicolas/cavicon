
/**
 * scripts/smoothscroll.jsx
 *
 * Smoot scroll init
 */

onload(function() {

	smoothScroll.init({

		speed: 1000,
		easing: 'easeInOutQuad',
		updateURL: true,
		offset: -1,

		callbackBefore: function (toggle, anchor) { },
		callbackAfter:  function (toggle, anchor) { }

	});

});