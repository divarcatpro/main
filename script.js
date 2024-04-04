let $ = document
let loading = $.querySelector(".loader")

function loadHandler() {
	setInterval(function (){
	loading.classList.add("hidden")
	},8000)
}

window.addEventListener("load",loadHandler)
setTimeout(function(){ loading.remove(); }, 13000);

function addBadge(favicon) {
  const faviconSize = 32;
  const canvas = document.createElement('canvas');

  canvas.width = faviconSize;
  canvas.height = faviconSize;

  const context = canvas.getContext('2d');
  const img = document.createElement('img');

  const createBadge = () => {
      context.drawImage(img, 0, 0, faviconSize, faviconSize);

      context.beginPath();
      context.arc(canvas.width - faviconSize / 3 , faviconSize / 3, faviconSize / 3, 0, 2 * Math.PI);
      context.fillStyle = '#e30';
      context.strokeStyle="white";
      context.lineWidth = 6;
      context.stroke();
      context.fill();

      context.font = '15px Arial, sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#fff';
      context.fillText(6, canvas.width - faviconSize / 3, faviconSize / 3);

      favicon.href = canvas.toDataURL('divar.png');
   };

  img.addEventListener('load', createBadge);

  img.src = favicon.href;
}

document.querySelectorAll('link[rel="shortcut icon"], link[rel="icon"]').forEach(addBadge);
