// ==UserScript==
// @name getIp
// @namespace Violentmonkey Scripts
// @include http://10.0.201.2:5019/firewall/address_list/
// @grant none
// ==/UserScript==

$(function(){
  $('#domain').change(function(){
     $.ajax({
        url:'http://172.16.1.2/ip.php',  
        dataType:'jsonp',
		data:'domain='+$('#domain').val(),
		jsonpCallback:'jc'  ,
        success:function(result) {  
             prompt($('#domain').val(),result.ip);
        }
     });
  });
})