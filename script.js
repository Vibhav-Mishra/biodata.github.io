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

function toggleLanguage() {
  const languageToggle = document.getElementById('languageToggle');
  const language = languageToggle.innerText;
  
  if (language === 'Hindi') {
    document.getElementById('dobLabel').innerText = 'जन्म तिथि:';
    document.getElementById('dobValue').innerText = '30/05/1997 - 07:56 PM (रात)';
    languageToggle.innerText = 'English';
  } else {
    document.getElementById('dobLabel').innerText = 'DOB:';
    document.getElementById('dobValue').innerText = '30/05/1997 - 07:56 PM (night)';
    languageToggle.innerText = 'Hindi';
  }
}
