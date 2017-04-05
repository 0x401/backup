<?php
header('Content-type: application/json');
$ip = gethostbyname($_GET['domain']);
$arr=array('ip'=>$ip);  
$result=json_encode($arr);
$callback=!empty($_GET['callback'])?$_GET['callback']:null;  
if($callback){echo $callback."($result)"; }
else echo $_GET['domain'].':'.$ip; 
?>
