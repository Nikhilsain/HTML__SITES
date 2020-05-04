var poster = document.querySelectorAll("img");


for(var i=0;i<poster.length;i++){
poster[i].addEventListener("mouseover", function(){
	this.style.visibility = "hidden";
});
}

for(var i=0;i<poster.length;i++){
poster[i].addEventListener("mouseout", function(){
	this.style.visibility = "visible";
});
}
