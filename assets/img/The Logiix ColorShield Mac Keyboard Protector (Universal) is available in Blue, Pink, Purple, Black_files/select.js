// Example usage - http://www.kevinleary.net/?load=yes

// Parse URL Queries
function url_query( query ) {
	query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var expr = "[\\?&]"+query+"=([^&#]*)";
	var regex = new RegExp( expr );
	var results = regex.exec( window.location.href );
	if ( results !== null ) {
		return results[1];
	} else {
		return false;
	}
}

var url_param = url_query('load');
if( url_param ) {
//	alert(url_param); // "yes"
}


function removeParameterFromUrl(url,parameterName)
{
    var reg = new RegExp('&?'+parameterName+'=([^&]$|[^&]*)','gi');
    return url.replace(reg, "");
}


function extractPageName(hrefString)
{
  var arr = hrefString.split('.');
  arr = arr[arr.length-2].split('/');
  return arr[arr.length-1].toLowerCase();
}

// search through all the links in array, if one points to
// the same file, apply the class .current to it and to its parent
function setActiveMenu(arr, crtPage)
{
  for(var i=0; i < arr.length; i++)
  if(extractPageName(arr[i].href) == crtPage)
  {
    arr[i].className = "current";
    arr[i].parentNode.className = "current";
  }
}

// call this method from your page
function setPage()
{
  if(document.location.href)
    hrefString = document.location.href;
  else
    hrefString = document.location;

	if (document.getElementById("display_menu_3")!=null)
	  setActiveMenu(document.getElementById("display_menu_3").getElementsByTagName("a"), extractPageName(hrefString));
	  if (document.getElementById("display_menu_5")!=null)
	  setActiveMenu(document.getElementById("display_menu_5").getElementsByTagName("a"), extractPageName(hrefString));
	   if (document.getElementById("display_menu_6")!=null)
	  setActiveMenu(document.getElementById("display_menu_6").getElementsByTagName("a"), extractPageName(hrefString));
	     if (document.getElementById("display_menu_7")!=null)
	  setActiveMenu(document.getElementById("display_menu_7").getElementsByTagName("a"), extractPageName(hrefString));
	     if (document.getElementById("display_menu_8")!=null)
	  setActiveMenu(document.getElementById("display_menu_8").getElementsByTagName("a"), extractPageName(hrefString));


}