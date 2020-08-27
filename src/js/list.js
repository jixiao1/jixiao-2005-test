$(function(){
    $(".daohang").mouseover(function(){
        $(this).siblings(".d1").slideToggle(1000,"linear");
    })
    // $(".header_left").on("mouseout",".daohang",function(){
    //        $(this).parent().children(".d1").hide(1000,"linear");    
    // })
    $("#cuo").click(function(){
        $(this).parents(".d1").slideUp(1000);
    })
 //  console.log( $(".shouji").find(".lisyt"));
      $(".shouji").mouseover(function(){
          $(this).find(".lisyt").show();
          $(".img").hide();
      })
      $(".shouji").mouseout(function(){
        $(this).find(".lisyt").hide();
        $(".img").show();
    })

    $(".nav_inner>ul>li").click(function(){
         
         var index=$(this).index();
         

         $(this).children("span").addClass("cur");
         $(this).siblings("li").children("span").removeClass("cur");
         $(this).children("a").css({
             color:"red"
         })
         $(this).siblings("li").children("a").css({
             color:"#333"
         })
    })

    $(".nav_inner>ul>li>a").hover(function(){
         $(this).css({
             color:"red"
         })
    },function(){
          $(this).parent().siblings("li").children("a").css({
              color:"#333"
          })
    })
    var con=document.getElementsByClassName("con")[0];
    console.log(con);
    var main=document.getElementsByClassName("main")[0];
    console.log(main);
    var h=document.documentElement.scrollTop||document.body.scrollTop;
    $(window).scroll(function(){
        if($(window).scrollTop()>=main.offsetHeight){
            $(".main").addClass("fixed");
            con.style.marginTop=main.offsetHeight+"px";
            
            
        }
        else{
            $(".main").removeClass("fixed");
            con.style.marginTop=0;
        }
    })

    $(".nav_inner>ul>li").click(function(){
          var index=$(this).index();
          console.log(index);
          $(".col").eq(index).show().siblings().hide();
         
    })
    var html="";
          
    getSend("../../data.php",function(data){
      //  console.log(data);
        var json=JSON.parse(data);
        console.log(json);
        json.forEach(item=>{
            console.log(item);
            html+=` <div class="col">
             <div>
             <a href="./info.html?id=${item.Id}"><img src="${item.src}" alt=""></a>
            <a href="javascript:;" class="wenzi"> 
            ${item.info}</a>
            <div class="item1">
                 
                 
            ${item.miaoshu}
    
    
            </div>
            <div class="mg1">
                 <div class="left">
                     <div class="left_1">
                           <span>${item.price}</span>
                          
                     </div>
                     <div class="left_2">
                         <div>
                             <div>
                                <i>${item.price1}</i>
                                 
                             </div>
                             <span>${item.num}</span>
                         </div>
                         
                     </div>
                 </div>
                 <div class="right">${item.title}</div>
                 
            </div>

        </div></div>`;
          
        })
        $(".col").html(html);
    })
    


   
     
  
})