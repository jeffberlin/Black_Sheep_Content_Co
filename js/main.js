// Opens all links in a new tab
var links =  document.links;
for (var i = 0; i < links.length; i++) {
	links[i].target = "_blank";
}