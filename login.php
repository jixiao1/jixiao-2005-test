<?php
   header("content-type:text/html;charset=utf-8");
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    $password = md5($password);
    $link = mysqli_connect("localhost","root","root","user");
    if(!$link){
        die('{"type" : "error", "detail" : "数据库故障"}');
    }
    $select_sql = "SELECT  * FROM `userinfo` WHERE (`username`='$username' AND `password`='$password')";
    $select_res = mysqli_query($link,$select_sql);
    if(!$select_res){
        mysqli_close($link);
        die('{"type" : "error", "detail" : "'.mysqli_error($link).'"}');
    }
    $select_arr = mysqli_fetch_all($select_res,MYSQLI_ASSOC);

    if($select_arr){
        mysqli_close($link);
        die('{ "type" : "success", "detail" : "登录成功"}');
    }
    mysqli_close($link);
    echo '{"type" : "error" , "detail":"账号与密码不符,请重新输入"}';
?>