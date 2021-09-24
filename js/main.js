// Play video on hover
$(document).ready(function() {
	
	$(".video-overlay").hover(hoverVideo, hideVideo);

	function hoverVideo(e) {
		$(this).find('video').get(0).currentTime = 0;
		$(this).find('video').get(0).play();
	}
	function hideVideo(e) {
		$(this).find('video').get(0).pause();
	}
});

//Table of content highlighting
$(document).ready(function() {
	
	$("#table-of-contents a").removeClass("current")
	currentAnchor().addClass("current")

	$(window).scroll(function() {
	  $("#table-of-contents a").removeClass("current")
	  currentAnchor().addClass("current")
	})
});
  
function tocItem(anchor) {
return $("[href=\"" + anchor + "\"]")
}

function heading(anchor) {
return $("[id=" + anchor.substr(1) + "]")
}

function anchors() {
	if (!_anchors) {
		_anchors = $("#table-of-contents a").map(function() {
			return $(this).attr("href")
		})
	}
	return _anchors
}

var _anchors = null
function currentAnchor() {
	var winY = window.pageYOffset
	var currAnchor = null

	if (!_anchors) {
		_anchors = $("#table-of-contents a").map(function() {
			return $(this).attr("href")
		})
	}
	_anchors.each(function(index, value) {
		var y = heading(value).position().top
		if (y < winY) {
			currAnchor = value;
			return;
		}
	});
	if(currAnchor == null) {
		currAnchor = _anchors[0];
	}
	return tocItem(currAnchor)
}