particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
$(window).on('beforeunload', function() {
  $(window).scrollTop(20);
});

function pf_active(){
  if(window.location.hash=="#section-portfolio"){
      setTimeout(function(){
        $('.social-icons-fixed,.page-deco').addClass('pf-click');
        }, 900);			
      setTimeout(function(){
        $('.pf-nav.left,.pf-nav.right').addClass('pf-click');
        }, 1000);					
    }else{
      setTimeout(function(){
        $('.social-icons-fixed,.page-deco').removeClass('pf-click');
        }, 900);
      setTimeout(function(){
        $('.pf-nav.left,.pf-nav.right').removeClass('pf-click');
        }, 1000);					
    }
}

var scrolling = false; // Flag to prevent multiple scrolls

window.addEventListener('wheel', function(event) {
  // Check if the user is scrolling downwards
  if (event.deltaY > 0 && !scrolling ) {

    // Get the ID of the current section
    var currentSectionId = window.location.hash.replace('#', '') || 'section-home';
    if (currentSectionId == 'section-contact'){
      scrolling = false;
      return;
    }
    // Find the next section using the current section ID
    var currentSection = document.getElementById(currentSectionId);
    var currentSectionBottom = currentSection.offsetHeight;
    if(window.pageYOffset + window.innerHeight >= currentSectionBottom){
    var nextSection = currentSection.nextElementSibling;
    
    scrolling = true; // Set the scrolling flag
    // If the next section exists, navigate to its hyperlink
    if (nextSection) {
      // Get the hyperlink of the next section
      var nextSectionHyperlink = nextSection.getAttribute('id');
      // If the next section has a hyperlink, change the URL to it
      if (nextSectionHyperlink) {
        
        event.preventDefault();
        
        history.pushState(null,null,'index.html#'+nextSectionHyperlink);
        var section_name = '#' + nextSectionHyperlink;
        jQuery('#content,#bg-overlay').removeClass("menu-open");
				
				jQuery('#mainmenu li a').removeClass('active');
                jQuery(this).addClass('active');
				try{
        jQuery('#content').animate({
          'height': jQuery(section_name).css('height')
      }, 400, 'easeOutCubic',  function() {
           jQuery('#content').scrollTo(section_name,section_name);
      })}catch(err){console.log(err);}
      
				jQuery('.img-url').removeClass('to-size');
				jQuery(section_name).find('.img-url').addClass('to-2x');
				jQuery(section_name).find('.img-url').removeClass('to-2x');
				jQuery(section_name).find('.img-url').addClass('to-size');
        scrolling = false;
        $(window).scrollTop(0);
      }
    }
  }
  
  pf_active();	
  }
},{passive:false});
