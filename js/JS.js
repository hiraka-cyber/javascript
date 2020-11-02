$(function(){
$('a').click(function(){
  $("div:hidden:first").fadeIn("slow");
});
$(".s").click(function(){
  $(".s").fadeOut("slow");
});

$(".p:first").click(function(){
  $(this).fadeTo("slow",0.33);
});
$(".c").click(function(){
  $(this).slideUp();
});
$(".c").hover(function(){
  $(this).addClass("hilite");
},function(){
  $(this).removeClass("hilite");
});
$(window).on('load',function(){
  //
});
$(".x").clone().appendTo(document.body);
$(".x").clone().appendTo(document.body);
$(".x").clone().appendTo(document.body);
$(window).scroll(function(){
  $("span").css("display","inline").fadeOut("slow");
});
$('.z').scrollLeft(100);
$('.b').scrollTop(50);

$('#lot').click(function(){
  if($(".q:first").is(":hidden")){
    $(".q").slideDown("slow");
  }else{
    $(".q").hide();
  }
});
$(".w").click(function(){
  $(".e").slideToggle();
});
$('#fx').click(function(){
  if($(".r:first").is(":hidden")){
    $(".r").slideDown("fast");
  }else{
    $(".r").slideUp();
  }
});
$("li").hover(function(){
  $(this).append($("<span>***</span>"));
},function(){
  $(this).find("span:last").remove();
});
$("#go").click(function(){
  $("#block").animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  },1500);
});
$("#right").click(function(){
  $(".block").animate({"left":"+=50px"},"slow");
});
$("#left").click(function(){
  $(".block").animate({"left":"-=50px"},"slow");
});
$("#animate").click(function(){
  $(".block").animate(
    {height: "toggle",opcity: "toggle"},
    "slow"
  );
});
jQuery.extend(jQuery.easing,
{
  easeInQuart: function(x,t,b,c,d){
    return c*(t/=d)*t*t*t + b;
  },
});
$("#button").click(function(){
  $(".t").animate(
    {width: "toggle",opacity: "toggle"},
    "slow","easeInQuart"
  );
});
$(window).scroll(function(){
  $("#pixcel").text($(this).scrollTop());
});
$(function(){
  $(".y").scrollTop(40);
});
$('.o').click(function(){
  var h1 = $('.h1').offset().top;
  $('html,body').animate({scrollTop:h1});
});
$("#bbs").on('click',function(){
  $(window).scrollTop(300);
});

$("html,body").animate({scrollTop:$('#header').offset().top});

$("#now").on({'click': function(){
  console.log('OnClick!');
},'mouseenter': function(){
  console.log('Hover!');
}});

$('#now').hover(function(){
  var colors = ['#f00','#0f0','#00f','#f0f','#0ff','#ff0'];
  var rnd = Math.floor(Math.random() * colors.length);
  $('#now').css('background-color',colors[rnd]);
});
$('h1').fadeIn(3000,function(){
  console.log('FadeIn!');
});
$(function(){
  $('.flow').hide().fadeIn('slow');
});

$(function(){
  $('.show').click(function(){
    $('div').addClass('showUp');
  });
});

$(function(){
  var h = $(window).height();
  $('#contents').css('display','none');
  $('#loader-bg,#loader').height(h).css('display','block');
});
$(window).on('load',function(){
  $('#loader-bg').delay(400).fadeOut(300);
  $('#loader').delay(200).fadeOut(100);
  $('#contents').css('display','block');
});


//header fade
$(function(){
  var pos = 0;
  var header = $('header');

  $(window).on('scroll', function(){
    if($(this).scrollTop() < pos ){
      //上スクロール時の処理
      header.removeClass('hide');
    }else{
      //下スクロール時の処理
      header.addClass('hide');
    }
    pos = $(this).scrollTop();
  });
});

});
