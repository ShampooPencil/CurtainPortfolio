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

  //for expanding the list items HOME, ABOUT etc.
  $(document).ready(function(){
    var listItem = $('#listItem');
    var listItem2 = $('#listItem2');
    var listItem3 = $('#listItem3');
    $("#button-1").click(function(){
      // $("listItem").css("fontSize", "100px");
      // $( "h1" ).height( "50px" );
      $("#special1").toggle();
      $("#special2").hide();
      $("#special3").hide();
      //$( "li" ).height( "50px" );
      // var text_input = $('#button-1');
      // text_input.css("font-size", "50px");
      listItem2.css("font-size", '35px');
      listItem3.css("font-size", '35px');
      $("#listItem").animate({
        fontSize: $('#listItem').css('font-size') == '35px' ? '50px' : '35px'
      });
    })
    
    $("#button-2").click(function(){
      $('#special2').toggle();
      $("#special1").hide();
      $("#special3").hide();
      // var listItem = $('#listItem');
      listItem.css("font-size", '35px');
      listItem3.css("font-size", '35px');
      // $("listItem1").css('font-size', '35');
      // $("listItem3").css('font-size', '35');
      $('#listItem2').animate({
        fontSize: $('#listItem2').css('font-size') == '35px' ? '50px' : '35px'
      });
    });
    $("#button-3").click(function(){
      $('#special3').toggle();
      $("#special2").hide();
      $("#special1").hide();
      listItem.css("font-size", '35px');
      listItem2.css("font-size", '35px');
      $('#listItem3').animate({
        fontSize: $('#listItem3').css('font-size') == '35px' ? '50px' : '35px'
      });
    });
  
})