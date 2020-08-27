window.onload=function(){
    var tabs=document.getElementsByClassName("tab_item");
    var divs=document.getElementsByClassName("itemc");
     var txt1=document.getElementsByClassName("txt1")[0];
    var password=document.getElementsByClassName("txt1")[1];
     var tupian=document.getElementsByClassName("tupian")[0];
    var tupianImg01=document.getElementsByClassName("tupian")[0].children[0];
    var tupianImg02=document.getElementsByClassName("tupian")[0].children[1];
   
    //console.log(password);
    for(var i=0;i<tabs.length;i++){
        tabs[i].index=i;
        tabs[i].onclick=function(){
           for(var i=0;i<tabs.length;i++){
               tabs[i].className="tab_item";
           }
           this.className="tab_item on";
           for(var i=0;i<divs.length;i++){
               divs[i].style.display="none";
           }
           divs[this.index].style.display="block";

        }
    }
    // txt1.onfocus=function(){
    //     this.value="";
    // }
    // txt1.onblur=function(){
    //     this.value="用户名/手机/邮箱";
    // }
    // password.onfocus=function(){
    //     this.value="";
    // }
    // password.onblur=function(){
    //     this.value="密码";
    // }
    tupianImg01.style.left="0px";
    tupianImg01.onmouseover=function(){
        this.style.left="-90px";
        tupianImg02.style.display="block"
    }
    tupian.onmouseleave=function(){
        tupianImg02.style.display="none";
        tupianImg01.style.left="0px";
    }
}