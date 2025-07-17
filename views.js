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
      sectionText.textContent = text;
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
    endBtn.onclick = () => showChapterEndPage(currentChapter,currentLanguage);
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
}

function showSecretBPage() {
  hideAllPages();
  secretBPage.style.display = "block";
  secretBAnswerInput.value = "";
  secretBFeedback.textContent = "";
}

function showSecretCPage() {
  hideAllPages();
  secretCPage.style.display = "block";
}

function showSecretDPage() {
  hideAllPages();
  secretDPage.style.display = "block";
  secretDAnswerInput.value = "";
  secretDFeedback.textContent = "";
}

function showSecretEPage() {
  hideAllPages();
  secretEPage.style.display = "block";
}

function showSecretFPage() {
  hideAllPages();
  secretFPage.style.display = "block";
  secretFAnswerInput.value = "";
  secretFFeedback.textContent = "";
}

function showSecretGPage() {
  hideAllPages();
  secretGPage.style.display = "block";
  secretGAnswerInput.value = "";
  secretGFeedback.textContent = "";
}

function showSecretHPage() {
  hideAllPages();
  secretHPage.style.display = "block";
}