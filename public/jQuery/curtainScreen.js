
$(document).ready(function() {
    $('.trigger').click(function() {
      var $this = $(this),
      notThis = $this.hasClass('open'),
      thisNav = $this.attr("rel");
      if (!notThis) {
       $('.triggered-area, .trigger').removeClass('open');
       if ( $( '.trigger' ).hasClass( "block-scroll" ) ){
        $('html').removeClass('disable-scroll');
        $('#overlay-mobile').removeClass('visible');
       }
      }
      $this.toggleClass('open');
      $("#"+thisNav).toggleClass('open');
      if ( $( this ).hasClass( "block-scroll" ) ){
       $('html').toggleClass('disable-scroll');
       $('#overlay-mobile').toggleClass('visible');
      }
    });
    $(document).on('click', function(event) {
      if (!$(event.target).closest('.triggered-area, .trigger').length) {
       $('.triggered-area, .trigger').removeClass('open');
       if ( $( '.trigger' ).hasClass( "block-scroll" ) ){
        $('html').removeClass('disable-scroll');
        $('#overlay-mobile').removeClass('visible');
       }
      }
    });
  });
  //1/5/2020 so i still need a way to figure when i click on about etc the side bar should move
  //         slide away. The only way i can think right now is if the sidebar is visible,
  //         do if/else kind of thing that if visisble click on the button or else do basically 
  //         nothing. ok still looking good though.
  //for expanding the list items HOME, ABOUT etc.
//   $(document).ready(function(){
//     var listItem = $('#listItem');
//     var listItem2 = $('#listItem2');
//     var listItem3 = $('#listItem3');
//     var sideBar = $("#sideBar");
//     var sideBarBtn = $("#sidebar-btn");
//     $("#button-1").click(function(){
//       $("#special1").toggle();
//       $("#special2").hide();
//       $("#special3").hide();
//       //$( "li" ).height( "50px" );
//       // var text_input = $('#button-1');
//       // text_input.css("font-size", "50px");
//       listItem2.css("font-size", '35px');
//       listItem3.css("font-size", '35px');
//       $("#listItem").animate({
//         fontSize: $('#listItem').css('font-size') == '35px' ? '50px' : '35px'
//       });
//     })
    
//     $("#button-2").click(function(){
//       $('#special2').toggle();
//       $("#special1").hide();
//       $("#special3").hide();
//       // var listItem = $('#listItem');
//       listItem.css("font-size", '35px');
//       listItem3.css("font-size", '35px');
//       $('#listItem2').animate({
//         fontSize: $('#listItem2').css('font-size') == '35px' ? '50px' : '35px'
//       });
//     });
//     $("#button-3").click(function(){
//       $('#special3').toggle();
//       $("#special2").hide();
//       $("#special1").hide();
//       listItem.css("font-size", '35px');
//       listItem2.css("font-size", '35px');
//       $('#listItem3').animate({
//         fontSize: $('#listItem3').css('font-size') == '35px' ? '50px' : '35px'
//       });
//     });
  
// });

function navItemContentToggle(clickedNavItem) {
  $(clickedNavItem)
    .next(".navContent")
    .toggle();
  $(clickedNavItem).animate({
    fontSize: $(clickedNavItem).css("font-size") == "35px" ? "50px" : "35px"
  });
  
  if ($('#sidebar').hasClass('visible')) {
    // $('#sidebar-btn').click();
    $('#sidebar').removeClass('visible');
  }

}
/* for hovering over social network buttons */
$(".box").hover(function(){
  $(this).filter(':not(:animated)').animate({ width: "220px", height: "240px", textAlign: "center" });
}, function() {
  $(this).animate({ width: "150px", height: "140px"});
});

// $(".pushBorder").hover(function(){
//   $(this).filter(':not(:animated)').animate({ width: "70%", height: "90%", textAlign: "center" });
// }, function() {
//   $(this).animate({ width: "70%", height: "140px"});
// });


$(".navButton").on("click", function() {
  navItemContentToggle(this);
});

$(document).ready(function() {
  $('#sidebar-btn').on('click', function() {
    $('#sidebar').toggleClass('visible');
  });
});

/* 12/26/19..... clicking on links are set. now, i want to put side bar in the site, but after i put the right
content in the links after getting clicked on. Like, really put my work, education, 
etc. but seriously looking great! Keep working on it!*/ 

// 1/7/2020 ok so now im thinking fixing that dumb pic errors, and doing some cool hover and
// making pics and social links bigger after hovering over them(or on them i mean)