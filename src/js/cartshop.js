$(function(){
    //   console.log($(".checkAll").prop("checked"));  
    // 1. 全选 全不选功能模块
        // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkboxj-checkbox）就可以了
        // 事件可以使用change  
       $(".checkAll").change(function(){
       // console.log($(".checkAll").prop("checked"));
       $(".j-checkbox").prop("checked",$(this).prop("checked"));
       $(".checkAll").prop("checked",$(this).prop("checked"));
       })
    
//2. 如果小复选框被选中的个数等于2 就应该把全选按钮选上，否则全选按钮不选
    //    $("body").on(".j-checkbox",click,function(){
    //     if($(this:checked).length === $(this).length){
    //         $(".checkAll").prop("checked", true);
              
    //        }else{
    //         $(this).prop("checked", false);
    //        }
    //    })
        //    $(".j-checkbox").change(function(){
        //        if($(".j-checkbox:checked").length === $(".j-checkbox").length){
        //         $(".checkAll").prop("checked", true);
                  
        //        }else{
        //         $(".checkAll").prop("checked", false);
        //        }
               
        //    })
      
        
          
     
    
       $(".shouye").click(function(){
           window.location.href="../pages/index.html"
       })
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
      $(".fixewd").mouseover(function(){
          $(this).css({
              backgroundColor:"orangered",
              color:"white"
          })
      })
      $(".fixewd").mouseout(function(){
        $(this).css({
            backgroundColor:"#fff",
            color:"black"
        })
    })
       $(window).scroll(function(){
              if($(window).scrollTop()>=300){
                  $(".fixewd").fadeIn();
              }else{
                $(".fixewd").fadeOut();
              }
       })
       $(".fixewd").click(function(){
           $("html").scrollTop(0);
       })
    
  
    var html="";
    $.ajax({
        url:'../json/02.json',
        methods:"post",
        success:function(data){
          // console.log(data);
         //  return data;
           data.forEach(item=>{
              // console.log(item);
               html+=`
               <div class="listyu">
                            <img src="${item.src}" alt="">
                              
                                  <div class="price_item clearFix">
                                      <i>￥</i>
                                      <em  class="big">${item.price}</em>
                                      <em class="small">.00</em>
                                      <span class="bid" style="display: none;">${item.bid}</span>
                                      
                                  </div>
                              
                            <div class="listinfo">
                                <a href="#" 
                                title="${item.title}">
                                ${item.title}
                                  </a>
                            </div>
                            <a href="javascript:;" class="inlist">
                                <img src="../img/iconshop.png" alt="">
                                <span class="gowu">加入购物车</span>
                            </a>
                        </div>
               `

           })
            $(".listMenus").html(html);
         
            
        }
       
    })
    
    var code=localStorage.getItem("item");
   // if(!!code){
     code=JSON.parse(code);
   // }
   
    console.log(code);
    var Btn="";
    code.forEach(item =>{
        console.log(item.good.Id);
        console.log(item.good);
        var num=item.good.Id;
        console.log(num)
        Btn+=`
        <div class="min-item-s" index="${num}">
        <!-- checkbox区域 -->
        <div class="inp">
            <input type="checkbox" class="j-checkbox">
        </div>
        <div class="list1">
            <img src="${item.good.src}" alt="" style="width: 80px; height: 80px;">
            <div class="xinxi">
                <p class="info">
                    ${item.good.info}
                </p>
                <div class="xuzn">选购增值服务</div>
            </div>
        </div>
        <div class="price">
            <span class="priceNUm">${item.good.price}</span>
            <span class="chu">促销价</span>
        </div>
        <div class="jiajian">
            <span class="del">-</span>
            <input type="text" value="1" max="99" class="num">
            <span  class="jia">+</span>
        </div>
        <div class="count">${item.good.price}</div>
        <a href="javascript:;"  class="remove">删除</a>
        <div class="del" style="display:none">${item.good.Id}</div>
    </div>
        `
    })
    
   
    $(".mins").html(Btn);
   
    $(".j-checkbox").change(function(){
        if($(".j-checkbox:checked").length === $(".j-checkbox").length){
         $(".checkAll").prop("checked", true);
           
        }else{
         $(".checkAll").prop("checked", false);
        }
     //   console.log($(this));
        
    })
       //  4. 用户修改文本框的值 计算 小计模块  
    
       $(".num").change(function(){
        // 先得到文本框的里面的值 乘以 当前商品的单价
       var num=$(this).val();
       //console.log(num);
     //  console.log(num);
        code.forEach((item)=>{
            //console.log(item);
           // console.log(item.count);
           // console.log(item.good.Id);
           var goodsId=$(this).parent().siblings(".del").text();
          // console.log(goodsId);
          if(item.good.Id=goodsId){
              item.count=num;
              localStorage.setItem("item",JSON.stringify(code));
          }
          

        })
       
       var p=$(this).parent().siblings(".price").children(".priceNUm").html();
       p=p.substr(1);
       $(this).parent().siblings(".count").html("￥"+(p*num).toFixed(2));

       getSum();


   })
        // 5. 计算总计和总额模块
        getSum();
        function getSum(){
          var count = 0; // 计算总件数 
          var money = 0; // 计算总价钱
          //对数量进行遍历
           $(".num").each(function(i,elem){
              count+=parseInt($(elem).val());
  
           })
           //console.log(count);
           localStorage.setItem("num",count);
           $(".jianshu>span").html(count);
           //对单价和进行遍历
           $(".count").each(function(i,elem){
               money+=parseFloat($(elem).text().substr(1));
  
           })
             $(".jiancount>span").text(money.toFixed(2));
          
  
        }
          //添加的数量功能
          $(".jiajian .jia").click(function(){
            // console.log($(".num").val());
             var num=$(this).siblings(".num").val();
              
               //  $(".num").val(num);
                
                num++;
                if(num>99){
                   return;
              }
              $(this).siblings(".num").val(num);
              code.forEach((item,index)=>{
                //console.log(item.good.Id);
              //console.log(item.count);
              var goodId =$(this).parent().siblings(".del").text();
                if(item.good.Id==goodId){
                    item.count= $(this).siblings(".num").val();
                    localStorage.setItem("item",JSON.stringify(code));
                    
                }
                  
                 
              })
             
           
              
                var p=$(this).parent().siblings(".price").children(".priceNUm").html();
               //  console.log(p.substr(1));
               p=p.substr(1);
               // console.log(p);
               $(this).parent().siblings(".count").html("￥"+(p*num).toFixed(2));
                
               getSum();
       
              })
               // 减少数量的功能
          $(".jiajian .del").click(function(){
            var num=$(this).siblings(".num").val();
           
             if(num==1){
                 return false;
             }
             num--;
            
            //  console.log(1);
            $(this).siblings(".num").val(num);
            code.forEach((item,index)=>{
              //console.log(item.good.Id);
            //console.log(item.count);
            var goodId =$(this).parent().siblings(".del").text();
              if(item.good.Id==goodId){
                  item.count= $(this).siblings(".num").val();
                  localStorage.setItem("item",JSON.stringify(code));
                  
              }
                
               
            })
            var p=$(this).parent().siblings(".price").children(".priceNUm").html();
            //  console.log(p.substr(1));
            p=p.substr(1);
            // console.log(p);

            $(this).parent().siblings(".count").html("￥"+(p*num).toFixed(2));
            getSum();
            console.log(num);
          })
          document.addEventListener("mousemove",function(e){
              e=window.event||e;
              e.preventDefault?e.preventDefault():e.returnValue=false;
            //   console.log(2);
          })
             
                    // 6. 删除商品模块
        // (1) 商品后面的删除按钮
          $(".remove").click(function(){
        
           
             $(this).parents(".min-item-s").remove();
         //var num= $(this).parents(".min-item-s").attr("index");
           // console.log(index);
        //   console.log(code);
        var delId=$(this).siblings(".del").text();
      //  console.log(delId);

           code.forEach((item,index)=>{
              console.log(item.good.Id);
              if(delId==item.good.Id){
                code.splice(index,1);
                localStorage.setItem("item",JSON.stringify(code));
              }
                // $.each(item.good,function(index,ite){
                //     console.log(ite);
                // })
          })
        //    console.log(code.good);

           
            getSum();
       })
        // (2) 删除选中的商品
        $(".countlist>a").click(function(){
           
        //  console.log(localStorage.key("Id").good);
          //点击删除选中的按钮
          $(".j-checkbox").each(function(index,elem){
             // console.log(elem);
               var index_arr=[];
               $(".j-checkbox").each(function(index,item){
                 //把选中的商品的index 添加到商品中
                 if($(item).prop("checked")){
                   index_arr.push(index);
                 }
               })
               console.log(index_arr);
               //然后就是反转数组得到新的数组，在对新的数组遍历删除最后一个
               var rever_arr=index_arr.reverse();
               console.log(rever_arr);
               $.each(rever_arr,function(index,item){
                  code.splice(item,1);
                 
               })
               localStorage.setItem("item",JSON.stringify(code));
               $(".j-checkbox:checked").parents(".min-item-s").remove(); 
          })
        
        
          
            getSum();
        })
        // (3) 清空购物车 删除全部商品
        $(".clear").click(function(){
            $(".min-item-s").remove();
            localStorage.removeItem("item");
            
            getSum();
        })
        
    
       //console.log($(".shouye").prev()[0].innerHTML);
       //$(".shouye").prev().text(localStorage.getItem("num"));
        // console.log($(".shouye").prev().children(".ling")[0]);
       
        //   $(".listMenus").click(function(){
        //       console.log($(".listMenus").find(".inlist").children("span"));
        //   })
        // $(".listMenus").on("click",".inlist",function(){
        //    // console.log(this);
        //  //  console.log($(this).siblings(".price_item").children(".bid").html());
        //     var bid=$(this).siblings(".price_item").children(".bid").html();
        //     // var src=$(this).siblings("img").attr("src");
        //     // var price=$(this).siblings(".price_item").children(".big").html();
        //     // var title=$(this).siblings(".listinfo").children("a").html();
        //     // console.log(title);
        //     // console.log(price);
        //    // console.log(src);
        //    // console.log(bid);
        //    var goodArr=[{
        //        bid:bid,
        //        num:1
        //     //   src:$(this).siblings("img").attr("src"),
        //     //    price:$(this).siblings(".price_item").children(".big").html(),
        //     //   title:$(this).siblings(".listinfo").children("a").html()
        //    }]
        // //    var obj=
        //    //保存到localStronge
        //   // localStorage.setItem("goods",JSON.stringify(goodArr));//设置会不停的覆盖
        //     //console.log(localStorage.getItem("goods",JSON.stringify(goodArr)));
        //     //从localStorage 获取goods记录
        //     //判断如果goods在原来的记录中存在，存在就加+1；
        //     // 否则就是//var goodArr=[{
        //     //     bid:bid,
        //     //     num:1
        //     // }]
        //     if(!!localStorage.getItem("goods")){ //表示存在
        //             var cartGoods=JSON.parse(localStorage.getItem("goods"));
        //               var flag=false;
        //             for(var i=0;i<cartGoods.length;i++){
        //                 if(cartGoods[i].bid==bid){
        //                     //如果存在就给原来的数量加上1
        //                     cartGoods[i].num++;
        //                     flag=true;
        //                     break;
    
        //                 }
        //             }
        //             if(!flag){
        //                 cartGoods.push({bid:bid,num:1});
        //             }
        //             localStorage.setItem("goods",JSON.stringify(cartGoods));
        //     }else{
        //          //表示记录不存在
        //          localStorage.setItem("goods",JSON.stringify(goodArr));
        //     }
        //     computer();
        //     function computer(){
        //         var sum=0;
        //         //获取localstorage 中的数量
        //         if(!!localStorage.getItem("goods")){
        //             var cartgoods=JSON.parse(localStorage.getItem("goods"));
        //             $.each(cartgoods,function(index,elem){
        //                console.log($(elem));
        //                 sum+=elem.num;
        //             })
        //         }
        //         $(".ling").html(sum);
      
        //     }
        //     // console.log(localStorage.getItem("goods"));
        //         // var obj=localStorage.getItem("goods");
        //         // var arr=JSON.parse(obj);
        //         //  arr.forEach(item =>{
        //         //      console.log(item[0]);
        //         //  })
        //     // localStorage.getItem("goods").forEach(function(item){
        //     //       console.log(item);
        //     // })
        //     // console.log(obj);
        // // var c=new Cart();
        // //       //从localStorage中获取所有的商品记录goods
        // //   function Cart(){
        // //     this.cartGoods=[];  //保存goods的商品的记录
        // //     this.goods=[]; //保存数据库中获取的商品的记录
    
        // // }
        // // Cart.prototype.init=function(){
        // //     this.getCartGoods();
        // //     this.getGoods();
        // // }
        // // Cart.prototype.getCartGoods=function(){
        // //     if(!!localStorage.getItem("goods")){
        // //         this.cartGoods=JSON.parse(localStorage.getItem("goods"));
        // //     }
        // // }
        // // Cart.prototype.getGoods=function(){
        // //     var _this=this;
        // //     $.getJSON=("../json/02.json",function(){
        // //       //   console.log(res);
        // //       _this.goods=res;
        // //       _this.cartShow();
    
        // //     })
        // // }
        // // Cart.prototype.cartShow=function(){
        // //     var _this=this;
        // //     var ctr="";
        // //     $.each(this.goods,function(index,elem){
        // //         $.each(_this.cartGoods,function(index,cEle){
        // //             if(elem.bid===cEle.bid){
        // //                  console.log(1);
        // //             }
        // //         })
        // //     })
        // // }
        // //    var code=JSON.parse(localStorage.getItem("un"));
        // //      console.log(code);
        //      // console.log(1);
    
        // })
    
    
    
    })