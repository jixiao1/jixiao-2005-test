function getSend(url,cab){
    var xhr=new XMLHttpRequest();
    xhr.open("GET",url);

    xhr.onload=function(){
        cab(xhr.responseText);
    }
    xhr.send(null);
}

function postSend(url,cab,data){
    var xhr=new XMLHttpRequest();

    xhr.open("POST",url);

    xhr.onload=function(){
        cab(xhr.responseText);
    }
    //多一步步 请求头

    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xhr.send(data);
}