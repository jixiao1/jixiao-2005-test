var  box=document.getElementById("box");
        var small=box.children[0];
        var mask=small.children[1];
        var big=document.getElementById("big");
        var bigImg=big.children[0];
        small.onmouseout=function(){
            mask.style.display="none";
            big.style.display="none";
        }
        small.onmouseover=function(){
            mask.style.display="block";
            big.style.display="block";
        }  
  small.onmousemove=function(e){
      var e=window.event||e;
      var left=(e.clientX+ getScroll().left)-this.parentNode.offsetLeft;
	  left=left-mask.offsetWidth/2;
	  var top=(e.clientY+ getScroll().top)-this.parentNode.offsetTop;
      top=top-mask.offsetHeight/2;
      if(left<=0){
        left=0;
    }
    if(left>=small.offsetWidth-mask.offsetWidth){
        left=small.offsetWidth-mask.offsetWidth;
    }
    if(top<=0){
        top=0;
    }
    if(top>=small.offsetHeight-mask.offsetHeight){
        top=small.offsetHeight-mask.offsetHeight;
    }
      mask.style.left=left+"px";
      mask.style.top=top+"px";
      //大图的移动距离的方向和mask的方向是相反的
				//公式=mask遮罩的最大的移动距离/小盒子的宽度=大图的移动的距离/大图的宽度
    var left1=left/(small.offsetWidth)*(bigImg.offsetWidth);
	 var top1=top/(small.offsetHeight)*(bigImg.offsetHeight);

		bigImg.style.left=-left1+"px";
	  bigImg.style.top=-top1+"px";
  }
//   var menu=$(".menuu");
//   var ul=menu.children("ul");
//   var img=menu.find("img");
//   console.log(img);
//   console.log(img.attr("src"));


  $(".menuu>ul>li").mouseover(function(){
      var src1 =$(this).find("img").attr("src");
     // console.log(src1);
      $("#small img").attr("src",src1);
      $("#big img").attr("src",src1);
      $(this).addClass("conq").siblings().removeClass("conq");
  })
  $.ajax({
    url:"../json/01.json",
    dataType:"json",
    success:function(data){
        console.log(data);
        var html="";
        data.forEach(item =>{
            html+=`<div class="tab">
            <img src="${item.img}" alt="" title="${item.title}">
            <div class="jiu">
                <a href="#">${item.title}</a>
                     
                </div>
                <p class="price">${item.price}</p>
      </div>
            `
        })
        $(".tabContent").html(html);

    }
})
$(function(){
    $(".nav ul li.firstli").mouseover(function(){
        $(".d1").stop().slideDown();
    })
    $(".d1").mouseout(function(){
        $(".d1").stop().slideUp();
    })
    $("#cuo").click(function(){
        $("d1").stop().slideUp();
    })
    $(".tupian").mouseover(function(){
        $(".suhao").show();
        $(".xin").hide();
     
    })
    $(".tupian").mouseout(function(){
        $(".suhao").hide();
        $(".xin").show();
    })
    $(".footer_b button").mouseover(function(){
         $(this).addClass("active").siblings().removeClass("active");
         $(this).css({
             border:"1px solid orange"
         }).siblings().css({
            border:"1px solid #333333"
         })
    })
    $(".ghao").mouseover(function(){
        $(".dianpu").show();
    })
    $(".ghao").mouseout(function(){
        $(".dianpu").hide();
    })
    $(".navba>ul>li").mouseover(function(){
        $(this).css({
            backgroundColor:"red",
            opacity:.7
        }).siblings().css({
            backgroundColor:"#000000"
        })
    })
    $(".navMenu .dt").mouseover(function(){
        $(".navMenu>ul").show();
    })
    //给大盒子加效果
     $(".nav_left>dl").mouseover(function(){
           $(".bufen").css({
               display:"block"
           })
      
     })
     $(".nav_left>dl>dt").mouseout(function(){
           $(".bufen").css({
               display:"none"
           })
     })
     $(".bufen").mouseout(function(){
           $(".bufen").css({
               display:"none"
           })
     })
     $(".dropMenu").click(function(){
       
         $(this).children("ul").show();
         $(this).siblings().children("ul").hide();
         
       
     })
     $(".dropMenu>i").mouseout(function(){
         $(this).parent().children("ul").hide();
     })
     function incre(){
        $(".incre").click(function(){
         var attr=$(this).parent().children("input").attr("value");
          attr++;
          if(attr>99){
              attr=99;
          }
         $(this).parent().children("input").attr("value",attr);
     })
     }
    incre();
     function del(){
        $(".del").click(function(){
        var attr=$(this).parent().children("input").attr("value");
          attr--;
          if(attr<=1){
              attr=1;
          }
          $(this).parent().children("input").attr("value",attr);
     })
     }
     del();
     
    //   console.log($(".del").siblings("input"));
    // console.log(location.href);
      
//console.log(location.href.split("=").slice(1));
       $(".gowuche").click(function(){
           
        
        var id=location.href.split("=")[1];
     //   console.log(id);
         var json=[{
             id:id
         }]
       //  window.localStorage.setItem("un",JSON.stringify(json));
       setTimeout(function(){
             window.location.href="./shopcart.html";
       },2000);
         function setItem(data){
             var str = JSON.stringify(data);
             localStorage.setItem('item',str);
         }
         function getItem(){
             return JSON.parse(localStorage.getItem('item')||'[]')
         }
         $.ajax({
             url:"../../data.php",
             dataType:"json",
             methods:"post",
             success:function(data){
                    var cartProducts = getItem();
                    var flag = 0;
                    cartProducts.forEach(function(item,index){
                        var good = item.good;
                        if(good.Id==id){
                            item.count=1;
                            flag = 1;
                        }
                    })
                    if(flag==0){
                        data.forEach(function(one,index){
                            if(one.Id==id){
                                cartProducts.push({
                                    count:1,
                                    good:one
                                })
                            }
                        })
                        
                    }
                       
                   setItem(cartProducts)
                       
                       
                   
             }

         })
       })
      
   
  
  
    
})


  
  
 
  
