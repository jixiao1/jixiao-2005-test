window.onload=function(){
   var body=document.querySelector(".body");
   var contentbODY=body.children[0];
   var contentTile=body.children[0].children[0];
   var contentTA=contentTile.children[1];
   var btn=document.querySelector(".agree-btn");
   var lei=document.querySelector(".lei");
   var lei1=document.querySelector(".lei1");
   var lei2=document.querySelector(".lei2");
   var content=document.getElementsByClassName("content")[0];
   var cspan=content.getElementsByTagName("span");
  
   
    contentTA.onclick=function(){
        window.location.href="./index.html";
    }
    btn.onclick=function(){
        body.style.display="none";
        contentbODY.style.display="none";
    }
        
      
          
    
  
    
// console.log($("form>span").eq(0));
//   console.log($);
//   console.log($(".hunaying"));  
  

    
    

   
   
  
        
    
       


}
  

  