(function ($, window, document) {

	'use strict';
  
	$(document).ready(function(){

		//Nav link smooth scrolling
	
		$('.nav-link').on('click', function(event){
			var hashtag = $(this).attr('href');
			smoothScroll(hashtag);
			event.preventDefault();
		});
	
		var smoothScroll = function(target){
			var position = $(target).offset().top;
			if (target=='#home') {
				position = 0;
			}
			$('html, body').animate({
				scrollTop: position
			}, 800);
		};


		// *************************
		// ***  Project Section  *** 
		// *************************

		//Click on project to expand the full page
		$('.project-page').on('click', function(){

			//Return if the page is already expanded
			if($(this).hasClass('open')) return false;

			//Initialize project page if it is collapsed
			var projectElem = this,
				projectName = $(projectElem).attr('data-project'),
				currentPosition = $(document).scrollTop(),
				projectPosition = $(projectElem).offset().top;

			console.log(projectElem);

			//Send GA event tracking
			ga('send', {
				hitType: 'event',
				eventCategory: 'Projects',
				eventAction: 'click',
				eventLabel: projectName
			});

			//Lock background document scroll
			bodyScrollLock.disableBodyScroll(projectElem);

			//Expand project page
			$('html, body').animate({
				scrollTop: projectPosition
			}, 300, 'swing');
			$(projectElem).addClass('open');

			//Initialize Slick slider config
			var defaultSlickOption = {
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 2000,
				speed: 500
			};
			$(projectElem).find('.slider-contents').slick(defaultSlickOption);

			//Attach Dismiss Event
			var collapsePage = function(event){
				//Destroy Slick slider
				$(projectElem).find('.slider-contents').slick('unslick');
				//Scroll page back to the previous position
				$('html, body').animate({
					scrollTop: currentPosition
				}, 300, 'swing');
				//Unlock background document scroll
				bodyScrollLock.enableBodyScroll(projectElem);
				$(projectElem).removeClass('open');

				if (event&&event.stopPropagation) event.stopPropagation();
			};

			$(projectElem).find('.close-page').one('click', collapsePage);
			$(window).one('keyup', function(event){
				if (event.keyCode&&event.keyCode == 27) collapsePage();
			});
		});
		

		// ***********************
		// ***  About Section  *** 
		// ***********************
	
		//Align the photo height with the about contents
		$('.about .leftdiv').height($('.about .rightdiv').outerHeight());
		$(window).resize(function() {
			$('.about .leftdiv').height($('.about .rightdiv').outerHeight());
		});
	

		// **********************
		// ***  Home Section  *** 
		// **********************


		//Mobile Device Optimization 
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		if (isMobile) {
			//Avoid screen jumping by replace vh height with static height (100% of device height)
			$('#home').height(window.screen.height);
		}
	
		//Infinite Loop Svg Animation
		var loopwidth = 110;
		var loopheight = 50;
		var points = [
			[26, 4],
			[loopwidth-26, loopheight-4],
			[loopwidth-26, 4],
			[26, loopheight-4],
		];
	
		//leftloop animation
		var leftloop_svg = d3.select(".left-loop").append("svg")
			.attr("width", loopwidth)
			.attr("height", loopheight);
	
		var leftloop_path = leftloop_svg.append("path")
			.data([points])
			.attr("d", d3.svg.line()
			.tension(0) // Catmull–Rom
			.interpolate("cardinal-closed"));
	
		leftloop_svg.selectAll(".point")
			.data(points)
			// .enter().append("circle")
			//   .attr("r", 4)
			.attr("transform", function(d) { return "translate(" + d + ")"; });
	
		var leftloop_circle = leftloop_svg.append("circle")
			.attr("r", 3)
			.attr("transform", "translate(" + points[0] + ")");
	
		leftloop_transition();
	
		function leftloop_transition() {
			leftloop_circle.transition()
			.duration(4000)
			.ease('linear')
			.attrTween("transform", translateAlong(leftloop_path.node()))
			.each("end", leftloop_transition);
		}
	
		//rightloop animation
		var rightloop_svg = d3.select(".right-loop").append("svg")
			.attr("width", loopwidth)
			.attr("height", loopheight);
	
		var rightloop_path = rightloop_svg.append("path")
			.data([points])
			.attr("d", d3.svg.line()
			.tension(0) // Catmull–Rom
			.interpolate("cardinal-closed"));
	
		rightloop_svg.selectAll(".point")
			.data(points)
			// .enter().append("circle")
			//   .attr("r", 4)
			.attr("transform", function(d) { return "translate(" + d + ")"; });
	
		var rightloop_circle = rightloop_svg.append("circle")
			.attr("r", 3)
			.attr("transform", "translate(" + points[0] + ")");
	
		rightloop_transition();
	
		function rightloop_transition() {
			rightloop_circle.transition()
			.duration(4000)
			.ease('linear')
			.attrTween("transform", translateAlong(rightloop_path.node()))
			.each("end", rightloop_transition);
		}
	
		// Returns an attrTween for translating along the specified path element.
		function translateAlong(path) {
			var l = path.getTotalLength();
			return function(d, i, a) {
				return function(t) {
					var p = path.getPointAtLength(t * l);
					return "translate(" + p.x + "," + p.y + ")";
				};
			};
		}
	
	});
  
  })(jQuery, window, document);