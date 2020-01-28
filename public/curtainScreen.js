//add a hover for white bordering and animate on the trigger to go to the main page(its the x in the top-right corner)
$(".menu-trigger").hover(function () {
      $(this).filter(':not(:animated)').css({/*'text-align': 'center',*/ "borderLeft": "2px solid white", "borderRight": "2px solid white", "borderTop": "2px solid white", "borderBottom": "2px solid white" })
      .animate({ borderLeftWidth: "5px", borderRightWidth: "5px", borderTopWidth: "5px", borderBottomWidth: "5px"
      }, 200, 'linear');
}, function () {
  $(this).animate({ borderLeftWidth: "0px", borderRightWidth: "0px", borderTopWidth: "0px", borderBottomWidth: "0px"}, 200, 'linear');

});

$(document).ready(function () {
  console.log("ugjghvjhg")
  $('.trigger').click(function () {
    var $this = $(this),
      notThis = $this.hasClass('open'),
      thisNav = $this.attr("rel");
    if (!notThis) {
      $('.triggered-area, .trigger').removeClass('open');
      if ($('.trigger').hasClass("block-scroll")) {
        $('html').removeClass('disable-scroll');
        $('#overlay-mobile').removeClass('visible');
      }
    }
    $this.toggleClass('open');
    $("#" + thisNav).toggleClass('open');
    if ($(this).hasClass("block-scroll")) {
      $('html').toggleClass('disable-scroll');
      $('#overlay-mobile').toggleClass('visible');
    }
  });
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.triggered-area, .trigger').length) {
      $('.triggered-area, .trigger').removeClass('open');
      if ($('.trigger').hasClass("block-scroll")) {
        $('html').removeClass('disable-scroll');
        $('#overlay-mobile').removeClass('visible');
      }
    }
  });
});
// $( window ).bind("resize", function(){
//   // Change the width of the div
//   $(".pushBorder").css({display: "flex"});
// });
//1/5/2020 so i still need a way to figure when i click on about etc the side bar should move
//         slide away. The only way i can think right now is if the sidebar is visible,
//         do if/else kind of thing that if visisble click on the button or else do basically 
//         nothing. ok still looking good though.
//for expanding the list items HOME, ABOUT etc.


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
$(".box").hover(function () {
  $("#sidebar-btn").filter(':not(:animated)').css({ opacity: '0.8', position: "absolute" /*right: "-375px"*/ });
  //$(this).filter(':not(:animated)').animate({ width: "150px", height: "140px", fontSize: "50px"}, 200, 'linear' );
  $(this).filter(':not(:animated)').css({/*'text-align': 'center',*/ "border": "2px solid white", "position": "inherit", "margin-right": '50px' }).animate({
    fontSize: "300%", borderRadius: "30px"
    , right: '40%', top: "40%", width: "125px", height: "125px"
  }, 200, 'linear');
  //$(".meFace").filter(':not(:animated)').append('Thats mee beautiful face');
}, function () {
  $("#sidebar-btn").css({ position: "absolute" }).animate({ left: "150px" });//putting sidebar-btn so its right next to the main sidebar
  //$(".meFace").empty();
  $(this).css({ color: 'white', "border": "none" }).animate({ width: "100px", height: "100px", fontSize: "25px", borderRadius: "0px" }, 200, 'linear');
});

$("#myselfPic").hover(function () {
  //$(this).filter(':not(:animated)').animate({height: '150px', width: '150px'});
  $(".meFace").filter(':not(:animated)').append('Thats mee beautiful face');
}, function () {
  //$(this).animate({height: '100px', width: '100px'});
  $(".meFace").empty();
})

/*for hovering over the sidebar. White lines border should leave when not hovering sidebar thats the goal this function **/

//  $("div.mainSidebar").hover(function () {
//   $(this).filter(':not(:animated)').css({/*'text-align': 'center',*/ "borderRight": "2px solid white", "borderTop": "2px solid white" })
//   .animate({ borderRightWidth: "5px", borderTopWidth: "5px"
//   }, 200, 'linear');
//   $()
// }, function () {
//   $(this).animate({ borderRightWidth: "0px", borderTopWidth: "0px"}, 200, 'linear');
// });


//using #socialLink:hover for opacity on the socialLinks..idk working the best and fastest so far
// $("#socialLinks").hover(function (){
//   ('.box').filter(':not(:animated)').animate({opacity: "0.1"});
//  }, function() {
//   ('.box').animate({opacity: "0"});
// })
// $("#socialText").hover(function (){
//   ("#socialText").append("<strong>Hi</strong>");
// }, function () {
//   ("#socialText").prepend("<strong></strong>");
// })

// $("#myselfPic").hover(function () {
//   $(this).filter(':not(:animated)').css({"border": "2px solid white"}).animate({ fontSize: "300%", borderRadius: "30px", right: '40%', top: "40%", width: "175px", height: "175px"
// }, 200, 'linear');
// }, function() {
//   $(this).css({color: 'white', "border": "none" }).animate({ width: "100px", height: "100px"});
// });

//********this for minimizing the other boxes when hover over about/port/contact
//not sure if i need it at all so right now ill just comment it out**** */
//about port and contact animated hovers
// $(".pushBorder").hover(function () {
//   $(this).filter(':not(:animated)').animate({ width: "70%", borderRadius: "30px", display: "none" });
  
// }, function () {
//   $(this).animate({ width: "70%", borderRadius: "0px" });
//   //$(".portfolioBorder, contanctBorder, aboutBorder").animate({width: "70%", height: "70%"});
// });

// //for this, just minimizes the other content boxes when user is hovering oonly on one link(like about or portfolio)
// $(".aboutBorder").hover(function() {
//   //$( ".aboutCloseX" ).prepend("x&nbsp;&nbsp;").css({top: "40px", left: "40px", fontSize: "10px", margin: "0px 0px 0px 40px"});
//   $(".portfolioBorder, .contactBorder").filter(':not(:animated)').animate({width: "40%", height: "auto", fontSize: "10px"}, 200, 'linear');
// }, function() {
//   //$( ".aboutCloseX" ).empty();
//   $(".portfolioBorder, .contactBorder").animate({width: "70%", height: "auto", fontSize: "15px"}, 200, 'linear');
// });
// $(".portfolioBorder").hover(function() {
//   //$( ".portfolioCloseX" ).prepend("x&nbsp;&nbsp;").css({top: "40px", left: "auto", fontSize: "10px"});
//   $(".aboutBorder, .contactBorder").filter(':not(:animated)').animate({width: "40%", height: "auto", fontSize: "10px"}, 200, 'linear');
// }, function() {
//   //$( ".portfolioCloseX" ).empty();
//   $(".aboutBorder, .contactBorder").animate({width: "70%", height: "auto", fontSize: "15px"}, 200, 'linear');
// });
// $(".contactBorder").hover(function() {
//   //$( ".contactCloseX" ).prepend("x&nbsp;&nbsp;").css({top: "40px", left: "auto", fontSize: "10px"});
//   $(".aboutBorder, .portfolioBorder").filter(':not(:animated)').animate({width: "40%", height: "auto", fontSize: "10px"}, 200, 'linear');
// }, function() {
//   //$( ".contactCloseX" ).empty();
//   $(".aboutBorder, .portfolioBorder").animate({width: "70%", height: "auto", fontSize: "15px"}), 200, 'linear';
// });


$(".navButton").on("click", function () {
  navItemContentToggle(this);
});

$(document).ready(function () {
  $('#sidebar-btn').on('click', function () {
    $('#sidebar').toggleClass('visible');
  });
});

/* 12/26/19..... clicking on links are set. now, i want to put side bar in the site, but after i put the right
content in the links after getting clicked on. Like, really put my work, education,
etc. but seriously looking great! Keep working on it!*/

// 1/7/2020 ok so now im thinking fixing that dumb pic errors, and doing some cool hover and
// making pics and social links bigger after hovering over them(or on them i mean)