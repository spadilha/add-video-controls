(function () {
	// Select all <video> elements on the page
	const videos = document.querySelectorAll('video');

     // Remove all <div> elements that have a 'data-instancekey' attribute
	const divs = document.querySelectorAll('div[data-instancekey]');
	divs.forEach((div) => {
		div.remove();
	});

	// Iterate over each <video> element and add the controls attribute if not already present
	videos.forEach((video) => {
		if (!video.hasAttribute('controls')) {
			video.setAttribute('controls', 'controls');
		}
	});
})();
