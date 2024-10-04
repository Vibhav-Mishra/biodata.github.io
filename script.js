// Function to open the fullscreen image
function openFullscreen(element) {
  var fullscreenContainer = document.getElementById('fullscreenContainer');
  var fullscreenImage = document.getElementById('fullscreenImage');

  fullscreenImage.src = element.src;
  fullscreenContainer.style.display = 'flex';
}

// Function to close fullscreen image
function closeFullscreen() {
  var fullscreenContainer = document.getElementById('fullscreenContainer');
  fullscreenContainer.style.display = 'none';
}

// Set language and hide popup
function setLanguage(language) {
  const languagePopup = document.getElementById('languagePopup');
  const mainContent = document.getElementById('mainContent');
  
  // Show content after language selection
  languagePopup.style.display = 'none';
  mainContent.style.filter = 'none';

  if (language === 'en') {
    setEnglishText();
  } else if (language === 'hi') {
    setHindiText();
  }
}

// Default language setup on page load
window.onload = function() {
  const languagePopup = document.getElementById('languagePopup');
  const mainContent = document.getElementById('mainContent');

  // Blur the main content until language is selected
  mainContent.style.filter = 'blur(5px)';

  // Show the language selection popup
  languagePopup.style.display = 'flex';
}

// Set content for English
function setEnglishText() {
  document.getElementById('detailsHeader').innerText = 'Details';
  document.getElementById('occupationLabel').innerText = 'Occupation:';
  document.getElementById('dobLabel').innerText = 'DOB:';
  document.getElementById('dobValue').innerText = '30/05/1997 - 07:56 PM (night)';
}

// Set content for Hindi
function setHindiText() {
  document.getElementById('detailsHeader').innerText = 'विवरण';
  document.getElementById('occupationLabel').innerText = 'व्यवसाय:';
  document.getElementById('dobLabel').innerText = 'जन्म तिथि:';
  document.getElementById('dobValue').innerText = '30/05/1997 - 07:56 PM (रात)';
}
