const translations = {
  en: {
    headerTitle: "ॐ श्री गणेशाय नम:",
    name: "VIBHAV KUMAR MISHRA",
    detailsTitle: "Details",
    occupationLabel: "Occupation:",
    occupationValue: "SOFTWARE ENGINEER",
    companyLabel: "Company and Location:",
    companyValue: "RHOMBUZ DESIGN PVT LTD - BANGALORE(WORK FROM HOME)",
    dobLabel: "DOB:",
    dobValue: "30/05/1997 - 07:56 PM (night)",
    addressLabel: "Address:",
    addressValue: "SAMAHAN MEJAROAD PRAYAGRAJ",
    educationLabel: "Education:",
    educationValue: "MBA-IT",
    fatherNameLabel: "Father's Name:",
    fatherNameValue: "AKHILESH KUMAR MISHRA",
    fatherOccupationLabel: "Father's Occupation:",
    fatherOccupationValue: "GOV JOB (POST OFFICE)",
    motherNameLabel: "Mother's Name:",
    motherNameValue: "SUNITA MISHRA",
    contactDetailsLabel: "Contact Details:",
    contactDetailsValue: "8707243312",
    siblingsLabel: "Siblings:",
    siblingsValue: "3 Sisters (2 married)",
    footerTitle: "राधे राधे धन्यवाद"
  },
  hi: {
    headerTitle: "ॐ श्री गणेशाय नम:",
    name: "विभव कुमार मिश्रा",
    detailsTitle: "विवरण",
    occupationLabel: "पेशा:",
    occupationValue: "सॉफ्टवेयर इंजीनियर",
    companyLabel: "कंपनी और स्थान:",
    companyValue: "रॉमबुज़ डिज़ाइन प्राइवेट लिमिटेड - बैंगलोर (घर से काम)",
    dobLabel: "जन्म तिथि:",
    dobValue: "30/05/1997 - 07:56 PM (रात)",
    addressLabel: "पता:",
    addressValue: "समाहन मेजारोड प्रयागराज",
    educationLabel: "शिक्षा:",
    educationValue: "एमबीए-आईटी",
    fatherNameLabel: "पिता का नाम:",
    fatherNameValue: "अखिलेश कुमार मिश्रा",
    fatherOccupationLabel: "पिता का व्यवसाय:",
    fatherOccupationValue: "सरकारी नौकरी (डाकघर)",
    motherNameLabel: "माता का नाम:",
    motherNameValue: "सुनीता मिश्रा",
    contactDetailsLabel: "संपर्क विवरण:",
    contactDetailsValue: "8707243312",
    siblingsLabel: "भाई-बहन:",
    siblingsValue: "3 बहनें (2 शादीशुदा)",
    footerTitle: "राधे राधे धन्यवाद"
  }
};

let currentLanguage = "en";

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "hi" : "en";
  document.getElementById("languageToggle").innerText = currentLanguage === "en" ? "View in Hindi" : "View in English";

  const content = translations[currentLanguage];
  updateContent(content);
}

function setLanguage(language) {
  const languagePopup = document.getElementById('languagePopup');
  const mainContent = document.getElementById('mainContent');
  
  // Hide popup and remove blur on content
  languagePopup.style.display = 'none';
  mainContent.style.filter = 'none';

  if (language === 'en') {
    currentLanguage = 'en';
    updateContent(translations.en);
  } else if (language === 'hi') {
    currentLanguage = 'hi';
    updateContent(translations.hi);
  }
}

// Update content based on language
function updateContent(content) {
  document.getElementById('header-title').innerText = content.headerTitle;
  document.getElementById('name').innerText = content.name;
  document.getElementById('detailsHeader').innerText = content.detailsTitle;
  document.getElementById('occupationLabel').innerText = content.occupationLabel;
  document.getElementById('occupationValue').innerText = content.occupationValue;
  document.getElementById('companyLabel').innerText = content.companyLabel;
  document.getElementById('companyValue').innerText = content.companyValue;
  document.getElementById('dobLabel').innerText = content.dobLabel;
  document.getElementById('dobValue').innerText = content.dobValue;
  document.getElementById('addressLabel').innerText = content.addressLabel;
  document.getElementById('addressValue').innerText = content.addressValue;
  document.getElementById('educationLabel').innerText = content.educationLabel;
  document.getElementById('educationValue').innerText = content.educationValue;
  document.getElementById('fatherNameLabel').innerText = content.fatherNameLabel;
  document.getElementById('fatherNameValue').innerText = content.fatherNameValue;
  document.getElementById('fatherOccupationLabel').innerText = content.fatherOccupationLabel;
  document.getElementById('fatherOccupationValue').innerText = content.fatherOccupationValue;
  document.getElementById('motherNameLabel').innerText = content.motherNameLabel;
  document.getElementById('motherNameValue').innerText = content.motherNameValue;
  document.getElementById('contactDetailsLabel').innerText = content.contactDetailsLabel;
  document.getElementById('contactDetailsValue').innerText = content.contactDetailsValue;
  document.getElementById('siblingsLabel').innerText = content.siblingsLabel;
  document.getElementById('siblingsValue').innerText = content.siblingsValue;
  document.getElementById('footer-title').innerText = content.footerTitle;
}

// Function to open the full-screen view
function openFullscreen(imgElement) {
  const fullscreenContainer = document.getElementById('fullscreenContainer');
  const fullscreenImage = document.getElementById('fullscreenImage');
  
  fullscreenImage.src = imgElement.src;
  fullscreenContainer.style.display = 'flex';
}

// Function to close the full-screen view
function closeFullscreen() {
  const fullscreenContainer = document.getElementById('fullscreenContainer');
  fullscreenContainer.style.display = 'none';
}

// Show the language popup on load
window.onload = () => {
  const languagePopup = document.getElementById('languagePopup');
  const mainContent = document.getElementById('mainContent');
  languagePopup.style.display = 'flex';
  mainContent.style.filter = 'blur(5px)';

  // Update initial content to English
  updateContent(translations.en);
};
