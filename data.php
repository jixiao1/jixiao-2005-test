<?php

  header("content-type:text/html;charset=utf-8");

  //连接数据库

  $conn=mysqli_connect("localhost","root","root","test2");

  $sql="SELECT *  FROM `info`";
  $res=mysqli_query($conn,$sql);

  //解析数据

    $arr=mysqli_fetch_all($res,MYSQLI_ASSOC);
    $arr=json_encode($arr);

    echo $arr;



  
?>