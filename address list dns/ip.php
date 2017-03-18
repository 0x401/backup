<?php
header('Content-type: application/json');
$ip = gethostbyname($_GET['domain']);
$arr=array('ip'=>$ip);  
$result=json_encode($arr);
$callback=$_GET['callback'];  
echo $callback."($result)"; 
?>