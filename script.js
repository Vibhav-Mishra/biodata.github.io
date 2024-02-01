function openFullscreen(element) {
  var fullscreenContainer = document.getElementById('fullscreenContainer');
  var fullscreenImage = document.getElementById('fullscreenImage');

  fullscreenImage.src = element.src;
  fullscreenContainer.style.display = 'flex';
}

function closeFullscreen() {
  var fullscreenContainer = document.getElementById('fullscreenContainer');
  fullscreenContainer.style.display = 'none';
}
