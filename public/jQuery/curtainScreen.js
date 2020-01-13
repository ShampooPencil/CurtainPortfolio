
$(document).ready(function () {
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
/////////////////i have to make the btns tad bigger on the hover....it would help more. i think thats the problem

//$(document).ready(function () {
/* for hovering over social network buttons */
$(".box").hover(function () {
  $("#sidebar-btn").filter(':not(:animated)').css({position: "fixed", right: "-375px"}).animate({left: "175px"});
  //$(this).filter(':not(:animated)').animate({ width: "150px", height: "140px", fontSize: "50px"}, 200, 'linear' );
  $(this).filter(':not(:animated)').css({/*'text-align': 'center',*/ "border": "2px solid white", "position": "inherit", "margin-right": '50px'}).animate({fontSize: "300%", borderRadius: "30px"
  ,right: '40%',top: "40%", width: "125px", height: "125px" }, 300, 'linear');
  //$("#sidebar").animate({ width: "175px"}, 100, 'linear');
  //$(".fa").css({'margin-right': '0%', 'margin-top': "150%"});
  //$(this).filter(':not(:animated)').css({border: '2 solid #f37736'}).animate({borderRadius: "30px"});
}, function () {
  //$("#sidebar").animate({ width: "150"}, 100, 'linear');
  $("#sidebar-btn").css({position: "absolute"}).animate({left: "175px"});
  //$("#sidebar-btn").show();
  //$("sidebar-btn").animate({marginLeft: "100px", display: "show"}, 100, 'linear');
  $(this).css({color: 'white', "border": "none"}).animate({ width: "100px", height: "100px", fontSize: "25px", borderRadius: "0px"}, 300, 'linear');
  // $("#sidebar").animate({ width: "150"}, 100, 'linear');
  //$(".whiteHover").animate({ borderRadius: "0px"});
});
// $("#sidebar-btn").click(function() {
//   $(this).css({position: 'fixed', right: "-375px"});
// })
//})


//about port and contact animated hovers
$(".aboutBorder, .portfolioBorder, .contactBorder").hover(function () {
  $(this).filter(':not(:animated)').animate({ width: "70%", borderRadius: "30px" });
}, function () {
  $(this).animate({ width: "70%", borderRadius: "0px" });
});


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