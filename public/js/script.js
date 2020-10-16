(function($) {
	
	"use strict"
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500)
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop()
			var siteHeader = $('.main-header')
			var HeaderHeight = $('.main-header').height()
			var scrollLink = $('.scroll-to-top')
			if (windowpos > HeaderHeight) {
				siteHeader.addClass('fixed-header')
				scrollLink.fadeIn(300)
			} else {
				siteHeader.removeClass('fixed-header')
				scrollLink.fadeOut(300)
			}
		}
	}
	
	headerStyle()
	
	
	//Search Popup
	if($('#search-popup').length){
		
		//Show Popup
		$('.search-box-btn').on('click', function() {
			$('#search-popup').addClass('popup-visible')
		})
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('#search-popup').removeClass('popup-visible')
	        }
	    })
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible')
		})
	}
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar()
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html()
		$('.mobile-menu .navigation').append(mobileMenuContent)
		$('.sticky-header .navigation').append(mobileMenuContent)
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible')
		})
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open')
			$(this).prev('ul').slideToggle(500)
		})
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible')
		})
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('body').removeClass('mobile-menu-visible')
	        }
	    })
		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible')
		})

	}
	

	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		})
	}
	
	$(window).on('load', function() {
		handlePreloader()
	})	

})
(window.jQuery)

