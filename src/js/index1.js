$(function(){
    var top=$(".content").offset().top;
    // console.log(top);
  //  console.log(top);
    toggle();
    function toggle(){
        if($(document).scrollTop()>=top){
            $(".ulslide").fadeIn();
        }else{
            $(".ulslide").fadeOut();
        }
    }
    $(window).scroll(function(){
         toggle();
         $(".floor .w").each(function(item,ele){
               if($(document).scrollTop()>=$(ele).offset().top){
                   console.log(item);
                   $(".ulslide li").eq(item).addClass("current1").siblings().removeClass();
               }
         })
         
    })

    $(".ulslide li").click(function(){
        console.log($(this).index());
       var current=$(".floor .w").eq($(this).index()).offset().top;
      //页面动画滚动效果
      $("body,html").stop().animate({
          scrollTop:current
      })
       // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
       $(this).addClass("current1").siblings().removeClass();
    })
    $(".cc").click(function(){
        window.location.href="./info.html";
    })
    $('.ic1').on("mouseover",function(){
        $(this).css({
            backgroundColor:"orange"
        }).children("i").css({
            color:"white"
        })
    })
    $(".ic1").on("mouseout",function(){
        $(this).css({
            backgroundColor:"#383838"
        }).children("i").css({
            color:"orange"
        })
    })
    $('.ic2').on("mouseover",function(){
        $(this).css({
            backgroundColor:"orange"
        }).children("i").css({
            color:"white",
            
        })
    })
    $(".ic2").on("mouseout",function(){
        $(this).css({
            backgroundColor:"#383838"
        }).children("i").css({
            color:"orange"
        })
    })
    $(".ic3>a>i").mouseover(function(){
        $(this).siblings("div").stop().show(1000);
       

    })
    $(".ic3>a>i").mouseout(function(){
        $(this).siblings("div").stop().hide(1000);
       
    })
   
   $(window).scroll(function(){
       if($(window).scrollTop()>=300){
           $(".ic6").fadeIn();
       }else{
           $(".ic6").fadeOut();
       }

   })
   $(".ic6").click(function(){
       $("html").animate(function(){
              scrollTop:0
       })
   })
   lazyLoadInit({
    showTime: 1100,
    onLoadBackEnd: function(i, e) {
        // console.log("onLoadBackEnd:" + i);
    },
    onLoadBackStart: function(i, e) {
        // console.log("onLoadBackStart:" + i);
    }
});
  $(".gowu").click(function(){
      window.location.href="./shopcart.html";
      $(this).css({
          cursor:"default"
      })
  })
   $(".xaingqi").click(function(){
       window.location.href="./info.html";
   })
    //   console.log(localStorage.getItem("goods"));
    //   computer();
    //         function computer(){
    //             var sum=0;
    //             //获取localstorage 中的数量
    //             if(!!localStorage.getItem("goods")){
    //                 var cartgoods=JSON.parse(localStorage.getItem("goods"));
    //                 $.each(cartgoods,function(index,elem){
    //                    console.log($(elem));
    //                     sum+=elem.num;
    //                 })
    //             }
    //             $(".num").html(sum);
      
    //         }
         // console.log(1);
          //console.log(localStorage.getItem("num"));
          var  num=localStorage.getItem("num")||0;
          $(".num").text(num);
          
   
})