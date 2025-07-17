// app.js
let currentLanguage = "fr";
let currentChapter = null;
let currentSection = null;

// éléments communs
const languageLabel = document.getElementById("language-label");
const languageSelect = document.getElementById("language-select");
const chapterList = document.getElementById("chapter-list");
const numberLabel = document.getElementById("number-label");

// boutons navigation
const goToNumberPageBtn = document.getElementById("go-to-number-page");
const backToHome1Btn = document.getElementById("back-to-home-1");
const backToHome2Btn = document.getElementById("back-to-home-2");
const backToHome3Btn = document.getElementById("back-to-home-3");
const backToNumberPageBtn = document.getElementById("back-to-number-page");
const loadSectionBtn = document.getElementById("load-section");
const sectionNumberInput = document.getElementById("section-number");
const secretButton = document.getElementById("secret-button");
const endBtn = document.getElementById("go-to-end-page");

const toSecretBBtn = document.getElementById("to-secret-b");
const checkSecretBAnswerBtn = document.getElementById("check-secret-b-answer");
const secretBAnswerInput = document.getElementById("secret-b-answer");
const secretBFeedback = document.getElementById("secret-b-feedback");
const toSecretDBtn = document.getElementById("to-secret-d");
const checkSecretDAnswerBtn = document.getElementById("check-secret-d-answer");
const secretDAnswerInput = document.getElementById("secret-d-answer");
const secretDFeedback = document.getElementById("secret-d-feedback");
const toSecretFBtn = document.getElementById("to-secret-f");
const checkSecretFAnswerBtn = document.getElementById("check-secret-f-answer");
const secretFAnswerInput = document.getElementById("secret-f-answer");
const secretFFeedback = document.getElementById("secret-f-feedback");
const checkSecretGAnswerBtn = document.getElementById("check-secret-g-answer");
const secretGAnswerInput = document.getElementById("secret-g-answer");
const secretGFeedback = document.getElementById("secret-g-feedback");

const backToNumbersBtns = document.querySelectorAll(".back-to-numbers");

// charger liste chapitres
function displayChapterList() {
  chapterList.innerHTML = "";
  updateUIText();
  data.chapters.forEach((chapter) => {
    const button = document.createElement("button");
    button.textContent = chapter.name[currentLanguage];

    // style de bouton
    if (chapter.id === "testaccio") {
      button.classList.add("btn-testaccio");
    } else {
      button.classList.add("btn-chapter");
    }
    
    button.addEventListener("click", () => {
      currentChapter = chapter;
      showIntroPage(currentChapter, currentLanguage);
    });
    chapterList.appendChild(button);
  });
}

// traduction dynamique textes
function updateUIText() {
  languageLabel.textContent = uiTexts.languageChoice[currentLanguage];
  goToNumberPageBtn.textContent = uiTexts.startWalk[currentLanguage];
  numberLabel.textContent = uiTexts.audioNumber[currentLanguage];
}

// gestion des events
languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  updateUIText();
  displayChapterList();
});

goToNumberPageBtn.addEventListener("click", () => {
  updateUIText();
  showNumberPage(currentChapter, currentLanguage);
});

backToHome1Btn.addEventListener("click", () => {
  updateUIText();
  showStartPage();
});
backToHome2Btn.addEventListener("click", () => {
  updateUIText();
  showStartPage();
});
backToHome3Btn.addEventListener("click", () => {
  updateUIText();
  showStartPage();
});
backToNumberPageBtn.addEventListener("click", () => {
  updateUIText();
  showNumberPage(currentChapter, currentLanguage);
});
backToNumbersBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    updateUIText();
    showNumberPage(currentChapter, currentLanguage);
  });
});

loadSectionBtn.addEventListener("click", () => {
  const number = parseInt(sectionNumberInput.value);
  const section = currentChapter.sections.find(sec => sec.number === number);
  if (section) {
    currentSection = section;
    showSectionPage(currentSection, currentLanguage, currentChapter.name[currentLanguage]);
    //playAudio(sectionAudio); (permet de lire les audios automatiquement - retiré)
  } else {
    alert(uiTexts.sectionNotFound[currentLanguage]);
  }
});

// boutons pages secrètes
secretButton.addEventListener("click", showSecretAPage);
toSecretBBtn.addEventListener("click", showSecretBPage);
toSecretDBtn.addEventListener("click", showSecretDPage);
toSecretFBtn.addEventListener("click", showSecretFPage);

// énigme page secrète B
checkSecretBAnswerBtn.addEventListener("click", () => {
  const answer = parseInt(secretBAnswerInput.value);
  if (answer === 0) {
    showSecretCPage();
  } else {
    if (currentLanguage === "en"){
      secretBFeedback.textContent = "Wrong answer, try again!";
      }
    else if (currentLanguage === "it"){
      secretBFeedback.textContent = "Risposta sbagliata, riprova!";
      }
    else (currentLanguage === "it"){
      secretBFeedback.textContent = "Mauvaise réponse, essaye encore !";
      }
  }
});

// énigme page secrète D
checkSecretDAnswerBtn.addEventListener("click", () => {
  const answer = secretDAnswerInput.value.toLowerCase();
  if (answer === "louve") {
    showSecretEPage();
  } else {
    secretDFeedback.textContent = "Mauvaise réponse, essaye encore !";
  }
});

// énigme page secrète F
checkSecretFAnswerBtn.addEventListener("click", () => {
  const answer = secretFAnswerInput.value.toLowerCase();
  if (answer === "charade") {
    showSecretGPage();
  } else {
    secretDFeedback.textContent = "Mauvaise réponse, essaye encore !";
  }
});

// énigme page secrète G
checkSecretGAnswerBtn.addEventListener("click", () => {
  const answer = parseInt(secretGAnswerInput.value);
  if (answer === 0) {
    showSecretHPage();
  } else {
    secretGFeedback.textContent = "Mauvaise réponse, essaye encore !";
  }
});


// initialisation
document.addEventListener("DOMContentLoaded", () => {
  updateUIText();
  displayChapterList();
});
