// views.js

// sections de la page
const startPage = document.getElementById("start-page");
const introPage = document.getElementById("intro-page");
const numberPage = document.getElementById("number-page");
const sectionPage = document.getElementById("section-page");
const endPage = document.getElementById("end-page");
const secretAPage = document.getElementById("secret-a-page");
const secretBPage = document.getElementById("secret-b-page");
const secretCPage = document.getElementById("secret-c-page");
const secretDPage = document.getElementById("secret-d-page");
const secretEPage = document.getElementById("secret-e-page");
const secretFPage = document.getElementById("secret-f-page");
const secretGPage = document.getElementById("secret-g-page");
const secretHPage = document.getElementById("secret-h-page");

// intro
const introTitle = document.getElementById("intro-title");
const introAudio = document.getElementById("intro-audio");
const introText = document.getElementById("intro-text");

// number page (numéros)
const numberTitle = document.getElementById("number-title");

// section page (contenu)
const sectionTitle = document.getElementById("section-title");
const sectionAudio = document.getElementById("section-audio");
const sectionText = document.getElementById("section-text");

// end
const endTitle = document.getElementById("end-title");
const endAudio = document.getElementById("end-audio");
const endText = document.getElementById("end-text");

// secret pages
const secretTitles = document.querySelectorAll(".secret-title");
const secretAText = document.getElementById("secret-a-text");
const secretBText = document.getElementById("secret-b-text");
const secretCText = document.getElementById("secret-c-text");
const secretDText = document.getElementById("secret-d-text");
const secretEText = document.getElementById("secret-e-text");
const secretFText = document.getElementById("secret-f-text");
const secretGText = document.getElementById("secret-g-text");
const secretHText = document.getElementById("secret-h-text");
const secretGImagesContainer = document.getElementById("secret-g-images");
const secretHImage = document.getElementById("secret-h-image");

// pages
function hideAllPages() {
  startPage.style.display = "none";
  introPage.style.display = "none";
  numberPage.style.display = "none";
  endPage.style.display = "none";
  sectionPage.style.display = "none";
  secretAPage.style.display = "none";
  secretBPage.style.display = "none";
  secretCPage.style.display = "none";
  secretDPage.style.display = "none";
  secretEPage.style.display = "none";
  secretFPage.style.display = "none";
  secretGPage.style.display = "none";
  secretHPage.style.display = "none";
}

function showStartPage() {
  hideAllPages();
  startPage.style.display = "block";
}

function showIntroPage(chapter, lang) {
  hideAllPages();
  introPage.style.display = "block";
  introTitle.textContent = chapter.name[lang];
  introAudio.src = chapter.introAudio[lang];
  introText.textContent = chapter.introText[lang];
}

function showNumberPage(chapter, lang) {
  hideAllPages();
  numberPage.style.display = "block";
  numberTitle.textContent = chapter.name[lang];
  sectionNumberInput.value = "";
}

function showSectionPage(section, lang, chapterTitle) {
  hideAllPages();
  sectionPage.style.display = "block";
  sectionTitle.textContent = `${chapterTitle} - Audio ${section.number}`;
  sectionAudio.src = section.audio[lang];

  fetch(section.textFile[lang])
    .then(resp => resp.text())
    .then(text => {
      sectionText.innerHTML = text;
      // reset du scroll
      sectionText.scrollTop = 0;
    })
    .catch(() => {
      sectionText.textContent = "Impossible de charger le texte.";
    });

  if (currentChapter.name.fr === "Testaccio" && section.number === 5) {
    secretButton.style.display = "inline-block";
    secretButton.textContent = uiTexts.secretWalk[currentLanguage];
  } else {
    secretButton.style.display = "none";
  }
  if (section.number === currentChapter.sections.length) {
    endBtn.style.display = "inline-block";
    endBtn.textContent = uiTexts.endButton[currentLanguage];
  } else {
    endBtn.style.display = "none"; 
  }
}

function showChapterEndPage(chapter, lang) {
  hideAllPages();
  endPage.style.display = "block";
  endTitle.textContent = chapter.name[lang];
  endAudio.src = chapter.endAudio[lang];
  endText.textContent = chapter.endText[lang];
}

// vues des pages secrètes

function showSecretAPage() {
  hideAllPages();
  secretAPage.style.display = "block";
  secretTitles.forEach(title => {
    title.textContent = secretWalkTestaccio.secretTitle[currentLanguage];
  });
  secretAText.innerHTML = secretWalkTestaccio.pageAEnigma[currentLanguage];
  toSecretBBtn.textContent = secretWalkTestaccio.pageAButton[currentLanguage];
}

function showSecretBPage() {
  hideAllPages();
  secretBPage.style.display = "block";
  secretTitles.forEach(title => {
    title.textContent = secretWalkTestaccio.secretTitle[currentLanguage];
  });
  secretBText.innerHTML = secretWalkTestaccio.pageBEnigma[currentLanguage];
  secretBAnswerInput.value = "";
  secretBFeedback.textContent = "";
}

function showSecretCPage() {
  hideAllPages();
  secretCPage.style.display = "block";
  secretTitles.forEach(title => {
    title.textContent = secretWalkTestaccio.secretTitle[currentLanguage];
  });
  secretCText.innerHTML = secretWalkTestaccio.pageCEnigma[currentLanguage];
  secretCAnswerInput.value = "";
  secretCFeedback.textContent = "";
}

function showSecretDPage() {
  hideAllPages();
  secretDPage.style.display = "block";
  secretTitles.forEach(title => {
    title.textContent = secretWalkTestaccio.secretTitle[currentLanguage];
  });
  secretDText.innerHTML = secretWalkTestaccio.pageDEnigma[currentLanguage];
  toSecretEBtn.textContent = secretWalkTestaccio.pageDButton[currentLanguage];
}

function showSecretEPage() {
  hideAllPages();
  secretEPage.style.display = "block";
  secretTitles.forEach(title => {
    title.textContent = secretWalkTestaccio.secretTitle[currentLanguage];
  });
  secretEText.innerHTML = secretWalkTestaccio.pageEEnigma[currentLanguage];
  secretEAnswerInput.value = "";
  secretEFeedback.textContent = "";
}


function showSecretFPage() {
  hideAllPages();
  secretFPage.style.display = "block";
  secretTitles.forEach(title => {
    title.textContent = secretWalkTestaccio.secretTitle[currentLanguage];
  });
  secretFText.innerHTML = secretWalkTestaccio.pageFEnigma[currentLanguage];
  secretFAnswerInput.value = "";
  secretFFeedback.textContent = "";
}

function showSecretGPage() {
  hideAllPages();
  secretGPage.style.display = "block";
  secretTitles.forEach(title => {
    title.textContent = secretWalkTestaccio.secretTitle[currentLanguage];
  });
  secretGText.innerHTML = secretWalkTestaccio.pageGEnigma[currentLanguage];
  secretGImagesContainer.innerHTML = "";
  secretWalkTestaccio.pageGImages[currentLanguage].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Indice visuel";
    secretGImagesContainer.appendChild(img);
  secretGAnswerInput.value = "";
  secretGFeedback.textContent = "";
  });
}

function showSecretHPage() {
  hideAllPages();
  secretHPage.style.display = "block";
  secretTitles.forEach(title => {
    title.textContent = secretWalkTestaccio.secretTitle[currentLanguage];
  });
  secretHText.innerHTML = secretWalkTestaccio.pageHEnding[currentLanguage];
  secretHImage.src = secretWalkTestaccio.pageHImage[currentLanguage];
}
