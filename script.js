<body>
  <div id="languagePopup" class="popup">
    <div class="popup-content">
      <h2>Select Language</h2>
      <button onclick="setLanguage('en')">English</button>
      <button onclick="setLanguage('hi')">Hindi</button>
    </div>
  </div>

  <div id="mainContent">
    <header>
      <h1>ॐ श्री गणेशाय नम:</h1>
      <div id="namePhotoContainer">
        <img id="photo" src="img/user_photo.jpg" alt="Your Photo" onclick="openFullscreen(this)">
        <img id="userPhoto" src="img/user_photo1.jpeg" alt="Your Photo1" onclick="openFullscreen(this)">
      </div>
      <h2>VIBHAV KUMAR MISHRA</h2>
    </header>
    
    <section>
      <h2 id="detailsHeader">Details</h2>
      <div class="details">
        <span id="occupationLabel">Occupation:</span>
        <span>SOFTWARE ENGINEER</span>
      </div>
      <div class="details">
        <span id="dobLabel">DOB:</span>
        <span id="dobValue">30/05/1997 - 07:56 PM (night)</span>
      </div>
    </section>

    <footer>
      <h1>राधे राधे धन्यवाद</h1>
    </footer>
  </div>

  <div id="fullscreenContainer" class="fullscreen" onclick="closeFullscreen()">
    <img id="fullscreenImage" src="" alt="Fullscreen Image">
  </div>

  <script src="script.js"></script>
</body>
