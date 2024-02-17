let $ = document
let loading = $.querySelector(".loader")

function loadHandler() {
	setInterval(function (){
	loading.classList.add("hidden")
	},8000)
}

window.addEventListener("load",loadHandler)
setTimeout(function(){ loading.remove(); }, 13000);
