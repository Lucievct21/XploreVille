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
const numButtons = document.querySelectorAll(".num-btn");
const clearBtn = document.getElementById("clear-number");
const secretButton = document.getElementById("secret-button");
const endBtn = document.getElementById("go-to-end-page");

const toSecretBBtn = document.getElementById("to-secret-b");
const checkSecretBAnswerBtn = document.getElementById("check-secret-b-answer");
const secretBAnswerInput = document.getElementById("secret-b-answer");
const secretBFeedback = document.getElementById("secret-b-feedback");
const checkSecretCAnswerBtn = document.getElementById("check-secret-c-answer");
const secretCAnswerInput = document.getElementById("secret-c-answer");
const secretCFeedback = document.getElementById("secret-c-feedback");
const toSecretEBtn = document.getElementById("to-secret-e");
const checkSecretEAnswerBtn = document.getElementById("check-secret-e-answer");
const secretEAnswerInput = document.getElementById("secret-e-answer");
const secretEFeedback = document.getElementById("secret-e-feedback");
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
  pauseAudio(introAudio);
  showNumberPage(currentChapter, currentLanguage);
});

backToHome1Btn.addEventListener("click", () => {
  updateUIText();
  pauseAudio(introAudio);
  showStartPage();
});
backToHome2Btn.addEventListener("click", () => {
  updateUIText();
  showStartPage();
});
backToHome3Btn.addEventListener("click", () => {
  updateUIText();
  pauseAudio(endAudio);
  showStartPage();
});
backToNumberPageBtn.addEventListener("click", () => {
  updateUIText();
  pauseAudio(sectionAudio);
  showNumberPage(currentChapter, currentLanguage);
});

backToNumbersBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const message =
      currentLanguage === "en"
        ? "You are about to leave the secret walk. Continue?"
        : currentLanguage === "it"
        ? "Stai per lasciare il percorso segreto. Continuare?"
        : "Tu es sur le point de quitter le parcours secret. Continuer ?";
    showConfirmPopup(message, () => {
      updateUIText();
      showNumberPage(currentChapter, currentLanguage);
    });
  });
});

numButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;
    if (val === "C") {
      sectionNumberInput.value = "";
    } else {
      sectionNumberInput.value += val;
    }
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
secretButton.addEventListener("click", () => {
  showSecretAPage();
  pauseAudio(sectionAudio);
});
toSecretBBtn.addEventListener("click", showSecretBPage);
toSecretEBtn.addEventListener("click", showSecretEPage);

// énigme page secrète B
checkSecretBAnswerBtn.addEventListener("click", () => {
  const answer = parseInt(secretBAnswerInput.value);
  if (answer === 7) {
    showSecretCPage();
  } else {
    if (currentLanguage === "en"){
      secretBFeedback.textContent = "Wrong answer, try again!";
      }
    else if (currentLanguage === "it"){
      secretBFeedback.textContent = "Risposta sbagliata, riprova!";
      }
    else {
      secretBFeedback.textContent = "Mauvaise réponse, essaye encore !";
      }
  }
});

// énigme page secrète C
checkSecretCAnswerBtn.addEventListener("click", () => {
  const answer = parseInt(secretCAnswerInput.value);
  if (answer === 1887) {
    showSecretDPage();
  } else {
    if (currentLanguage === "en"){
      secretCFeedback.textContent = "Wrong answer, try again!";
      }
    else if (currentLanguage === "it"){
      secretCFeedback.textContent = "Risposta sbagliata, riprova!";
      }
    else {
      secretCFeedback.textContent = "Mauvaise réponse, essaye encore !";
      }
  }
});

// énigme page secrète E
checkSecretEAnswerBtn.addEventListener("click", () => {
  const answer = secretEAnswerInput.value.toLowerCase();
  if (currentLanguage === "fr"){
    if (answer === "louve"){
      showSecretFPage();
    } else {
        secretEFeedback.textContent = "Mauvaise réponse, essaye encore !";
        }
  } else if (currentLanguage === "en"){
    if (answer === "wolf" || answer === "she-wolf"){
        showSecretFPage();
    } else {
        secretEFeedback.textContent = "Wrong answer, try again!";
        }
  } else if (currentLanguage === "it"){
    if (answer === "lupa"){
        showSecretFPage();
    } else {
        secretEFeedback.textContent = "Risposta sbagliata, riprova!";
        }
  }
});

// énigme page secrète F
checkSecretFAnswerBtn.addEventListener("click", () => {
  const answer = secretFAnswerInput.value.toLowerCase();
  if (answer === "greenwich") {
    showSecretGPage();
  } else {
    if (currentLanguage === "en"){
      secretFFeedback.textContent = "Wrong answer, try again!";
      }
    else if (currentLanguage === "it"){
      secretFFeedback.textContent = "Risposta sbagliata, riprova!";
      }
    else {
      secretFFeedback.textContent = "Mauvaise réponse, essaye encore !";
      }
  }
});

// énigme page secrète G
checkSecretGAnswerBtn.addEventListener("click", () => {
  const answer = secretGAnswerInput.value.toLowerCase();
  if (answer === "nicola") {
    showSecretHPage();
  } else {
    if (currentLanguage === "en"){
      secretGFeedback.textContent = "Wrong answer, try again!";
      }
    else if (currentLanguage === "it"){
      secretGFeedback.textContent = "Risposta sbagliata, riprova!";
      }
    else {
      secretGFeedback.textContent = "Mauvaise réponse, essaye encore !";
      }
  }
});

// message popup
function showConfirmPopup(message, onConfirm) {
  const overlay = document.getElementById("confirm-overlay");
  const msg = document.getElementById("confirm-message");
  const yesBtn = document.getElementById("confirm-yes");
  const noBtn = document.getElementById("confirm-no");
  // Texte localisé
  const yesText =
    currentLanguage === "en" ? "Continue" :
    currentLanguage === "it" ? "Continua" :
    "Continuer";
  const noText =
    currentLanguage === "en" ? "Stay" :
    currentLanguage === "it" ? "Resta" :
    "Rester";
  yesBtn.textContent = yesText;
  noBtn.textContent = noText;
  msg.textContent = message;
  overlay.classList.remove("hidden");

  const close = () => {
    overlay.classList.add("hidden");
    yesBtn.removeEventListener("click", confirmHandler);
    noBtn.removeEventListener("click", close);
  };

  const confirmHandler = () => {
    close();
    onConfirm();
  };

  yesBtn.addEventListener("click", confirmHandler);
  noBtn.addEventListener("click", close);
}


// initialisation
document.addEventListener("DOMContentLoaded", () => {
  updateUIText();
  displayChapterList();
});
