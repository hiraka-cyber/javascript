$(function(){
  var listContents = $("#entry_list_more li").length;
  $("#entry_list_more").each(function(){
    var Num = 10;

    $(this).find('#more_btn').show();
    $(this).find('#close_btn').hide();
    $(this).find("li:not(:lt("+Num+"))").hide();

    $('#more_btn').click(function(){
      Num += 3;
      $(this).parent().find("li:lt("+Num+")").slideDown();
      if(listContents <= Num){
        Num = 10;
        gtNum = Num - 1;
        $("#more_btn").hide();
        $("#close_btn").show();

        $('#close_btn').click(function(){
          $(this).parent().find("li:gt("+gtNum+")").slideUp();
          $(this).hide();
          $('#more_btn').show();
        });
      }
    });
  });

  $('.img-container').waypoint(function(direction){
    var activePoint = $(this.element);
    if(direction === 'down'){
      activePoint.addClass('active');
    }else{
      activePoint.removeClass('active');
    }
  },{offset: '70%'});

  $('.text-container').waypoint(function(direction){
    var activePoint = $(this.element);
    if(direction === 'down'){
      activePoint.addClass('active');
    }else{
      activePoint.removeClass('active');
    }
  },{offset: '70%'});
  $(window).on('load',function(){
  });
  $(window).on('resize',function(){
  });
  $(window).on('scroll',function(){
  });

  function animat_start(){
      var $demoTop = $('#demo_top');
      setTimeout(function(){
        $demoTop.addClass('demo_start');
        $demoTop.find('.txt_set').each(function(i) {
  			$(this).delay(80*i).queue(function(){
  				$(this).addClass("on");
              });
              });
      },300);

  }
  $(window).on('load',animat_start);

  function animationJS(){

      var $parent = $('.js-switch');

      init();

      function init(){
        JScount();
      }
      function waypoint($target){
        $target.waypoint(function(){
          $target.addClass('shown');
          $target.find('.txt_set').each(function(i) {
  			$(this).delay(80*i).queue(function(){
  				$(this).addClass("on");
              });
              });


        }, {
          offset: '80%'
        });

      }

      function JScount(){
        $parent.each(function(){
          var $this = $(this);
          var $target = $this.find('.number_eff, .ttl_eff, .list_eff' );
          var len = $target.length;

          for (var i = 0; i <= len; i++) {

            waypoint( $target.eq(i) );
          }
        });
      }
  }
  $(window).on('load',animationJS);
  var startPos = 0,winScrollTop = 0;

	$('.img-container').waypoint(function(direction){
		var activePoint = $(this.element);

		if (direction === 'down') {//scroll down
			activePoint.addClass('active');
		}
	},{offset : '70%'});

	$('.text-container').waypoint(function(direction){
		var activePoint = $(this.element);

		if (direction === 'down') {//scroll down
			activePoint.addClass('active');
		}
	},{offset : '70%'});

	/******************************************
	window scroll
	******************************************/
	$(window).on('scroll',function(){
		winScrollTop = $(this).scrollTop();
		if (winScrollTop >= startPos) {
			if(winScrollTop >= 200){
				$('.site-header').addClass('hide');
			}
		} else {
			$('.site-header').removeClass('hide');
		}
		startPos = winScrollTop;
	});

  $('#pagetop').click(function () {
                //id名#pagetopがクリックされたら、以下の処理を実行
                $("html,body").animate({scrollTop:0},"300");
            });
            //ページトップの出現
            $('#pagetop').hide();
            $(window).scroll(function () {
                if($(window).scrollTop() > 0) {
                    $('#pagetop').slideDown(600);
                } else {
                    $('#pagetop').slideUp(600);
                }
            });
            //ホバーイベント
            $("#pagetop").mouseover(function(){
                $(this).animate({
                    bottom:"0px"
                },300);
            });
            $("#pagetop").mouseout(function(){
                $(this).animate({
                    bottom:"-60px"
                },300);
            });
//right,left,center
$(function(){
  $('.box1 p').addClass('move');
  $(window).scroll(function(){
    $(".box1").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("p").removeClass('move');
      } else {
        $(this).find("p").addClass('move');
      }
    });
  });
});
//1 fade
$(function() {
  var $allMsg = $('#title');
  var $wordList = $('#title').html().split("");
  $('#title').html("");
  $.each($wordList, function(idx, elem) {
    var newEL = $("<span/>").text(elem).css({ opacity: 0 });
    newEL.appendTo($allMsg);
    newEL.delay(idx * 70);
    newEL.animate({ opacity: 1 }, 1);
  });
});

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});

});
