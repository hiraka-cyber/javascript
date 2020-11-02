$(function(){
  $('a img').hover(function(){
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
  }, function(){
    if (!$(this).hasClass('currentPage')) {
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
  });
});

$(function(){
    $("a[href^='http://']").attr("target","_blank");
});

$(function(){
  $('.toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

$(function(){
    $(".sampleBox").click(function(){
        window.location=$(this).find("a").attr("href");
        return false;
    });
});

$(function(){
    $("tr:even").addClass("odd");
});

$(function () {
  $('img').error(function(){    $(this).attr({src:'http://webcreatorbox.com/sample/images/missing.jpg',alt:'画像が見つかりません'});
    });
});

$(function () {
    $('.imgBox img').hide(); //ページ上の画像を隠す
});

var i = 0;
var int=0;
$(window).bind("load", function() {
  //ページコンテンツのロードが完了後、機能させる
    var int = setInterval("doThis(i)",500);
  //フェードするスピード
});

function doThis() {
    var images = $('img').length;//画像の数を数える
    if (i >= images) {// ループ
        clearInterval(int);//最後の画像までいくとループ終了
    }
    $('img:hidden').eq(0).fadeIn(500);//一つずつ表示する
    i++;
}

$(function () {
    $(".deleteBox .delete").click(function(){
        $(this).parents(".deleteBox").animate({ opacity: "hide" }, "slow");
    });
});

$(function () {
    $("form :input").focus(function() {
        $("label[for='" + this.id + "']").addClass("labelfocus");
    });

    $("form :input").blur(function() {
        $("label[for='" + this.id + "']").removeClass("labelfocus");
    });
});

$(function(){
  $(".focus").focus(function(){
    if(this.value == "キーワードを入力"){
      $(this).val("").css("color","#f39");
    }
  });
  $(".focus").blur(function(){
    if(this.value == ""){
      $(this).val("キーワードを入力").css("color","#969696");
    }
  });
});

$(function () {
  $("textarea").keyup(function(){
    var counter = $(this).val().length;
    $("#countUp").text(counter);

    if(counter == 0){
      $("#countUp").text("0");
    }
    if(counter >= 10){
      $("#countUp").css("color","red");
    } else {
      $("#countUp").css("color","#666");
    }
  });
});

$(function(){
    $(".checkbox").change(function(){
        if($(this).is(":checked")){
            $(this).next("label").addClass("LabelSelected");
        }else{
            $(this).next("label").removeClass("LabelSelected");
        }
    });
    $(".radio").change(function(){
        if($(this).is(":checked")){
            $(".RadioSelected:not(:checked)").removeClass("RadioSelected");
            $(this).next("label").addClass("RadioSelected");
        }
    });
});

$(function(){
    $(".open").click(function(){
      $("#slideBox").slideToggle("slow");
    });
});

$(function() {
  $('#accordion dd').hide();
  $('#accordion dt a').click(function(){
    $('#accordion dd').slideUp();
    $(this).parent().next().slideDown();
    return false;
  });
});

$(function(){
  $(".tooltip a").hover(function() {
    $(this).next("span").animate({opacity: "show", top: "-75"}, "slow");}, function() {
      $(this).next("span").animate({opacity: "hide", top: "-85"}, "fast");
    });
});

$(function(){
    $('a.print').click(function(){
        window.print();
        return false;
    });
});

var $svg = $('.svg1').drawsvg();

$svg.drawsvg('animate');

var $doc = $(document),
    $win = $(window),
    $svg = $('.svg2').drawsvg(),
    max = $doc.height() - $win.height();

$win.on('scroll', function() {
  var p = $win.scrollTop() / max;
  $svg.drawsvg('progress', p);
});

var count = 0,
    $svg = $('.svg3').drawsvg({
      callback: function() {
        $('#log').html('<p>Animation complete! <strong>' + (count++) + '</strong></p>');
        animate();
      }
    });

function animate() {
  $svg.drawsvg('animate');
}

animate();

var $svg = $('.svg4').drawsvg({
      duration: 5000,
      easing: 'linear'
    });

$svg.drawsvg('animate');
