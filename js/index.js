

// Load body display as none – DELIBERATELY PLACED BEFORE DOCUMENT READY FUNCTION
$('.curve-editor, .background').css('display', 'none');


$(document).ready(function() {




/****************************************************
/* CCONTENT FADE-IN
/****************************************************/


// call body image with fadeIn effect
$('.curve-editor, .background').fadeIn(800, function(){
  $(this).css('display','normal');
});




/****************************************************
/* SET TRANSITION SPEED
/****************************************************/


// Link slider value with #range
var slider = document.getElementById('rangeValue');
// Send slider value to #speed


// Load page with a default values
$('#transitionCss span, #speedValue').text(slider.value);


// Update value display with slider value
slider.oninput = function() {

  // Update speed in CSS copy 
  $('#transitionCss span, #speedValue').text(this.value);


  // Inject input value to preview CSS

  // Code for Safari 3.1 to 6.0
  document.getElementById('previewBall').style.WebkitTransitionDuration = this.value + 'ms';
  // Standard syntax
  document.getElementById('previewBall').style.transitionDuration = this.value + 'ms';

}




/****************************************************
/* MOUSEOVER HINT
/****************************************************/


// Mouseover previewBall
$('#previewBall').on('mouseover', function() {

  // scale play button
  $('.play i').addClass('attention');

});

// Mouseout previewBall
$('#previewBall').on('mouseout', function() {

  // scale play button
  $('.play i').removeClass('attention');

});




/****************************************************
/* SHOW CODE SNIPPET
/****************************************************/


// On click create anchor
$('#createCss').on('click', function(event) {

  // Prevent default anchor behaviour
  event.preventDefault();

  // Inject created CSS in to text area (invisible 'staging area')
  document.getElementById('transitionCopy').value = document.getElementById('transitionCss').innerText;
  
  // Add transition styles to sections
  $('.section-one, .section-two').addClass('section-transition');

  // Hide curve editor
  $('.section-one').toggleClass('hide-up');

  // Hide carousel chevs
  $('a #previousBtn, a #nextBtn').addClass('hide-carousel');

  // Show CSS code-snippet
  $('.section-two').toggleClass('show');

  // Remove transition styles (to avoid scaling lag when screen resizes)
  setTimeout(function () {
     $('.section-one, .section-two').removeClass('section-transition');
  },600);

});




/****************************************************
/* HIDE CODE SNIPPET
/****************************************************/


// On click close anchor
$('#close').on('click', function(event) {
  
  // Prevent default anchor behaviour
  event.preventDefault();

  // Add transition styles to sections
  $('.section-one, .section-two').addClass('section-transition');

  // Hide CSS code-snippet
  $('.section-two').toggleClass('show');

  // Show carousel chevs
  $('a #previousBtn, a #nextBtn').removeClass('hide-carousel');

  // Show curve editor
  $('.section-one').toggleClass('hide-up');

  // Remove transition styles (to avoid scaling lag when screen resizes)
  setTimeout(function () {
     $('.section-one, .section-two').removeClass('section-transition');
  },600);

});




/****************************************************
/* COPY TO CLIPBOARD
/****************************************************/


// Set value for 'generated' CSS
var textBox = document.getElementById('transitionCopy');

// Define copy anchor
var aButton = document.getElementById('copyCss');

    // On click copy anchor
    aButton.addEventListener('click', function (event) {
        
        // Prevent default anchor behaviour
        event.preventDefault();
        
        // Select 'generated' CSS box (it's contents)
        textBox.select();
        
        // Copy the content to clipboard
        document.execCommand('copy');

        // Give user feedback that content has been copied
        $('#copyCss').addClass('active');

        //
        setTimeout(function(){
            $('.active').removeClass('active');
        },1800);
        
    });




/****************************************************
/* TRIGGER PREVIEW
/****************************************************/


// Click preview anchor
$('#playButton').on('click', function(event) {
  
  // Prevent default anchor behaviour
  event.preventDefault();

  // Apply margin left (to change location of preview ball)
  $('.preview-ball').toggleClass('move-horizontal');
});




});