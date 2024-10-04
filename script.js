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
    dobValue: "30/05/1997",
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
  document.getElementById("header-title").innerText = content.headerTitle;
  document.getElementById("name").innerText = content.name;
  document.getElementById("details-title").innerText = content.detailsTitle;
  document.getElementById("occupation-label").innerText = content.occupationLabel;
  document.getElementById("occupation-value").innerText = content.occupationValue;
  document.getElementById("company-label").innerText = content.companyLabel;
  document.getElementById("company-value").innerText = content.companyValue;
  document.getElementById("dob-label").innerText = content.dobLabel;
  document.getElementById("dob-value").innerText = content.dobValue;
  document.getElementById("address-label").innerText = content.addressLabel;
  document.getElementById("address-value").innerText = content.addressValue;
  document.getElementById("education-label").innerText = content.educationLabel;
  document.getElementById("education-value").innerText = content.educationValue;
  document.getElementById("father-name-label").innerText = content.fatherNameLabel;
  document.getElementById("father-name-value").innerText = content.fatherNameValue;
  document.getElementById("father-occupation-label").innerText = content.fatherOccupationLabel;
  document.getElementById("father-occupation-value").innerText = content.fatherOccupationValue;
  document.getElementById("mother-name-label").innerText = content.motherNameLabel;
  document.getElementById("mother-name-value").innerText = content.motherNameValue;
  document.getElementById("contact-details-label").innerText = content.contactDetailsLabel;
  document.getElementById("contact-details-value").innerText = content.contactDetailsValue;
  document.getElementById("siblings-label").innerText = content.siblingsLabel;
  document.getElementById("siblings-value").innerText = content.siblingsValue;
  document.getElementById("footer-title").innerText = content.footerTitle;
}
