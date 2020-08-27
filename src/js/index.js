window.onload=function(){
    var head=document.getElementById("head");
    var img=head.children[0];
    var aSpan=head.children[1].children[0];
    aSpan.onclick=function(){
        head.style.display="none";
        
    }
    var header=document.getElementById("header");
    var nav=header.children[0];
     var ul=nav.children[0];
     var li=ul.children[0];
     var d1=li.children[2];
     var cuo=document.getElementById("cuo");
    li.onmouseover=function(){
        
        d1.style.display="block";
    }
    li.onmouseout=function(){
        d1.style.display="none";
        
    }
    cuo.onclick=function(){
        this.parentNode.style.display="none";
    }
     var hnav=document.getElementById("hnav");
     var mnav=document.querySelector(".mnav");
    var  mnavUi=mnav.children[0];
 
    
   var mnavUilis=mnavUi.children;
   
  var oAS=document.querySelectorAll(".d1a");
 // console.log(oAS);
   var List1=document.querySelectorAll(".list1");
    for(var i=0;i<mnavUilis.length;i++){
       mnavUilis[i].index=i;
       mnavUilis[i].onmouseover=function(){
           for(var i=0;i<mnavUilis.length;i++){
               mnavUilis[i].style.backgroundColor="#333333";
           }
           for(var i=0;i<List1.length;i++){
               List1[i].style.display="none";
           }
           this.style.backgroundColor="#ffffff";
           for(var i=0;i<List1.length;i++){
         
            List1[this.index].style.display="block";
          }

        
         
       }
       mnavUi.onmouseleave=function(){
        for(var i=0;i<List1.length;i++){
          List1[i].style.display="none";
          mnavUilis[i].style.backgroundColor="#333333";
        }   
     }



       
   }
  // 轮播区域
    var lunbo=document.getElementById("lunbo");
    var lun=lunbo.children[0];
    var lunUl=lun.children[0];
    var ImgLis=lunUl.children;
    var width=lunbo.offsetWidth;
    
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");

    var index=0;
    var spancontainer=document.getElementById("span_container");
    //console.log(spancontainer);
    for(var i=0;i<ImgLis.length;i++){
        ImgLis[i].style.left=width+"px";
        var span=document.createElement("span");
       span.innerHTML=i;
      
        span.className="ransapn";
        spancontainer.appendChild(span,spancontainer.children[0]);
    }
    ImgLis[index].style.left=0;
    light();
    spancontainer.onclick=function(e){
        var e=window.event||e;
        var target=e.target||e.srcElement;
         if(target.className=="ransapn"){
           var newIndex=parseInt(target.innerHTML);
            if(newIndex<index){
                ImgLis[newIndex].style.left=-width+"px";
                animation(ImgLis[newIndex],{left:0});
                animation(ImgLis[index],{left:width});
            }
            else if(newIndex>index){
                ImgLis[newIndex].style.left=-width+"px";
                animation(ImgLis[newIndex],{left:0});
                animation(ImgLis[index],{left:-width});
            }
            index=newIndex;//更新索引
            light();
         }
        
    }
    //小圆点高亮
    function light(){
        var spans=spancontainer.children;
        for(var i=0;i<ImgLis.length;i++){
            spans[i].className="ransapn";
        }
        spans[index].className="ransapn current"
    }

   // 点击左箭头
    prev.onclick=function(){
        var newIndex=index-1;
        if(newIndex<0){
            newIndex=ImgLis.length-1;
        }
        ImgLis[newIndex].style.left=-width+"px";
        animation(ImgLis[newIndex],{left:0});
        animation(ImgLis[index],{left:width});
        index=newIndex;
        light();

    }
    next.addEventListener("click",funcnext);
    function funcnext(){
        var newIndex=index+1;
        if(newIndex>ImgLis.length-1){
            newIndex=0;
        }
        ImgLis[newIndex].style.left=width+"px";
        animation(ImgLis[newIndex],{left:0});
        animation(ImgLis[index],{left:-width});
        index=newIndex;
        light();

    }

    var timer=null;
    timer=setInterval(()=>{
        funcnext()
    },1000);


    lunbo.onmouseover=function(){
        clearInterval(timer);
        prev.style.display="block";
        next.style.display="block";
    }
    lunbo.onmouseout=function(){
        timer=setInterval(()=>{
            funcnext();
        },1000);
        prev.style.display="none";
        next.style.display="none";
        
    }
    
     var ncotes=document.getElementsByClassName("nconte");
     
     var tabC=document.getElementById("tab");
     var tab1s=tabC.querySelectorAll(".tab1");
     
     for(var i=0;i<tab1s.length;i++){
         tab1s[i].index=i;
         tab1s[i].onclick=function(){
             for(var i=0;i<tab1s.length;i++){
                 tab1s[i].className="tab1";
             }
             for(var i=0;i<ncotes.length;i++){
                 ncotes[i].style.display="none";
             }
             this.className="tab1 curer";
             ncotes[this.index].style.display="block";
         }
     }
     var wrapper=document.querySelector(".wrapper");
     var img=wrapper.children[0].children[0].children[0].children[0];
    // console.log(img)

     var i=0;
     setInterval(function(){
         i++;
         if(i>3){
             i=1;
         }
         img.src="../img/lu"+i+".jpg";
         
     },1000);

     //时间戳
    var d=new Date();
    d.setHours(d.getHours()+2); 

    function countDown(){
        var reduce=d.getTime()-Date.now();
        return{
            hours:parseInt(reduce/1000/60/60),
            min:parseInt(reduce / 1000 /60 %60),
            sec: Math.round(reduce/1000%60)

        }
    }

    setInterval(function(){
        renderCountDown();
    },500);

     //
     var hour_e=document.getElementById("hour");
     var min_e=document.getElementById("min");
     var second=document.getElementById("second");

     function renderCountDown(){
         var res=countDown();

      hour_e.innerHTML=add(res.hours);
      min_e.innerHTML=add(res.min);
      second.innerHTML=add(res.sec);
     }
     function add(num){
         if(num<10){
             return '0'+num;
         }else{
             return num;
         }
     }


    var melright=document.querySelector(".melright");
    var meuKL=melright.children[0];
    //
   
    var Oas=meuKL.querySelectorAll("a");
      

         for(var i=0;i<Oas.length;i++){
            Oas[i].index1=i;
            Oas[i].onmouseover=function(){
               for(var i=0;i<Oas.length;i++){
                    Oas[i].style.color="#333";
       
               }
               Oas[this.index1].style.color="orange";
            } 
           
        
    }
    var slider=document.getElementById("slider");
    var wrap=slider.children[0];
    var wrapUl=wrap.children[0];
    var lis=wrapUl.children;
  
    var height=lis[0].offsetHeight;
  //  console.log(height);

    var index1=0;
    for(var i=0;i<lis.length;i++){
        lis[i].style.top=-height+"px";
    }
    lis[index1].style.top=0;

    timer1=setInterval(()=>{
        next1();
    },2000)
    function next1(){
        var newIndex=index1+1;
        if(newIndex>lis.length-1){
            newIndex=0;
        }
        lis[newIndex].style.top=height+"px";
        animation(lis[newIndex],{top:60});
        animation(lis[index1],{top:-height});
        index1=newIndex;
       
    }

    
}