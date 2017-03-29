document.onmouseup = function(){   
	var selected = document.getSelection();
	if (selected.type=="Range")
	{
		chrome.runtime.sendMessage({selected: selected.toString().toLowerCase()});
	}
}