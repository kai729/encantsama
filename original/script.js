
$(window).scroll(function(){
    var top = $(".sa").offset().top; // ターゲットの位置取得
    var position = top - $(document).height();  // 発火させたい位置
    
      // 要素が見えたときの動き 
      if($(document).scrollTop() > position){
        $(".sa").css("background-size","100%");
      }else{
        $(".sa").css("background-size","0%");
      }

      // それ以外の動き
    
  })

/*  $(window).scroll(function(){

    var top = $("#customer").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // 発火させたい位置
    
      // 要素が見えたときの動き 
      if($(window).scrollTop() > position){
        $("#customer").css("background-size","100%");
      }else{
        $("#customer").css("background-size","0%");
      }

      // それ以外の動き
    
  })
  
*/
$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop() + 200;
  var bgPosition = scrollTop / 4; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('#consept').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});

$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop() + 200;
  var bgPosition = scrollTop / 5; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('#customer').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});

$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop() + 200;
  var bgPosition = scrollTop / 4; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('#woman-menu').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});

$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop() + 200;
  var bgPosition = scrollTop / 5; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('#mens-menu').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});

$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop() + 200;
  var bgPosition = scrollTop / 5; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('#kids-menu').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});

$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop() + 200;
  var bgPosition = scrollTop / 5; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('#hard-menu').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});