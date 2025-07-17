/* data.js
   Contient toutes les données de contenu
   (langues, chapitres, sections, audios, textes).
*/

const uiTexts = {
  languageChoice: {
    fr: "Langue :",
    en: "Language :",
    it: "Lingua :"
  },
  startWalk: {
    fr: "Démarrer balade",
    en: "Start walk",
    it: "Inizio tour"
  },
  audioNumber: {
    fr: "Numéro audio :",
    en: "Audio number",
    it: "Numero audio"
  },
  sectionNotFound: {
    fr: "Section non trouvée !",
    en: "Section not found!",
    it: "Sezione non trovata!"
  },
  endButton: {
    fr: "Fin",
    en: "End",
    it: "Fine"
  },
  secretWalk: {
    fr: "Parcours secret 🕵️‍♀️",
    en: "Secret walk 🕵️‍♀️",
    it: "Percorso segreto 🕵️‍♀️"
  },
  backHome: {
    fr: "Retour accueil",
    en: "Back to home",
    it: "Torna alla home"
  }
};


const data = {
  languages: ["fr", "en", "it"],

  chapters: [
    {
      id: "testaccio",
      name: {
        fr: "Testaccio",
        en: "Testaccio",
        it: "Testaccio"
      },
      introAudio: {
        fr: "assets/audio/fr_ch1_intro.mp3",
        en: "assets/audio/en_ch1_intro.mp3",
        it: "assets/audio/it_ch1_intro.mp3"
      },
      introText: {
        fr: "Bonjour et bienvenue dans cette balade au cœur de Rome. Aujourd’hui, on part à la découverte de Testaccio, un quartier encore un peu à l’écart des sentiers touristiques, mais adoré des Romains. Entre histoire antique, héritage industriel, et cuisine bien vivante, tu verras : ici, chaque coin de rue a une histoire à raconter. Prêt ? Alors on y va !",
        en: "Welcome to Testaccio.",
        it: "Benvenuti a Testaccio."
      },
      endAudio: {
        fr: "assets/audio/fr_ch1_intro.mp3",
        en: "assets/audio/en_ch1_intro.mp3",
        it: "assets/audio/it_ch1_intro.mp3"
      },
      endText: {
        fr: "Et voilà, la balade touche à sa fin. J’espère qu’elle t’a plu, et que tu as apprécié découvrir Testaccio, ce quartier unique où l’histoire, la gastronomie et la vie locale se réunissent. Merci d’avoir marché avec moi, et à très bientôt pour une prochaine exploration romaine !",
        en: "End of the walk. Bye!",
        it: "Fine della passegiata. Ciao e alla prossima!"
      },
      sections: [
        {
          number: 1,
          audio: {
            fr: "assets/audio/Test_explore_ville.mp3",
            en: "assets/audio/en_ch1_s1.mp3",
            it: "assets/audio/it_ch1_s1.mp3"
          },
          textFile: {
            fr: "assets/texts/Test_fichier_texte.txt",
            en: "assets/texts/en/ch1_s1.txt",
            it: "assets/texts/it/ch1_s1.txt"
          }
        },
        {
          number: 2,
          audio: {
            fr: "assets/audio/fr_ch1_s2.mp3",
            en: "assets/audio/en_ch1_s2.mp3",
            it: "assets/audio/it_ch1_s2.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch1_s2.txt",
            en: "assets/texts/en/ch1_s2.txt",
            it: "assets/texts/it/ch1_s2.txt"
          }
        },
        {
          number: 3,
          audio: {
            fr: "assets/audio/fr_ch1_s3.mp3",
            en: "assets/audio/en_ch1_s3.mp3",
            it: "assets/audio/it_ch1_s3.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch1_s3.txt",
            en: "assets/texts/en/ch1_s3.txt",
            it: "assets/texts/it/ch1_s3.txt"
          }
        },
        {
          number: 4,
          audio: {
            fr: "assets/audio/fr_ch1_s4.mp3",
            en: "assets/audio/en_ch1_s4.mp3",
            it: "assets/audio/it_ch1_s4.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch1_s4.txt",
            en: "assets/texts/en/ch1_s4.txt",
            it: "assets/texts/it/ch1_s4.txt"
          }
        },
        {
          number: 5,
          audio: {
            fr: "assets/audio/fr_ch1_s5.mp3",
            en: "assets/audio/en_ch1_s5.mp3",
            it: "assets/audio/it_ch1_s5.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch1_s5.txt",
            en: "assets/texts/en/ch1_s5.txt",
            it: "assets/texts/it/ch1_s5.txt"
          }
        },
        {
          number: 6,
          audio: {
            fr: "assets/audio/fr_ch1_s6.mp3",
            en: "assets/audio/en_ch1_s6.mp3",
            it: "assets/audio/it_ch1_s6.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch1_s6.txt",
            en: "assets/texts/en/ch1_s6.txt",
            it: "assets/texts/it/ch1_s6.txt"
          }
        },
        {
          number: 7,
          audio: {
            fr: "assets/audio/fr_ch1_s7.mp3",
            en: "assets/audio/en_ch1_s7.mp3",
            it: "assets/audio/it_ch1_s7.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch1_s7.txt",
            en: "assets/texts/en/ch1_s7.txt",
            it: "assets/texts/it/ch1_s7.txt"
          }
        },
      ]
    },
    {
      id: "ch2",
      name: {
        fr: "En cours...",
        en: "Work in progress...",
        it: "In corso..."
      },
      introAudio: {
        fr: "assets/audio/fr_ch2_intro.mp3",
        en: "assets/audio/en_ch2_intro.mp3",
        it: "assets/audio/it_ch2_intro.mp3"
      },
      introText: {
        fr: "Bienvenue.",
        en: "Welcome.",
        it: "Benvenuti."
      },
      sections: [
        {
          number: 1,
          audio: {
            fr: "assets/audio/fr_ch2_s1.mp3",
            en: "assets/audio/en_ch2_s1.mp3",
            it: "assets/audio/it_ch2_s1.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch2_s1.txt",
            en: "assets/texts/en/ch2_s1.txt",
            it: "assets/texts/it/ch2_s1.txt"
          }
        },
        {
          number: 2,
          audio: {
            fr: "assets/audio/fr_ch2_s2.mp3",
            en: "assets/audio/en_ch2_s2.mp3",
            it: "assets/audio/it_ch2_s2.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch2_s2.txt",
            en: "assets/texts/en/ch2_s2.txt",
            it: "assets/texts/it/ch2_s2.txt"
          }
        }
      ]
    },
    // autres chapitres à ajouter ici plus tard
  ]
};


const secretWalkTestaccio = {
  secretTitle: {
    fr: "Testaccio - Parcours secret",
    en: "Testaccio - Secret walk",
    it: "Testaccio - Percorso segreto"
  },
  pageAEnigma: {
    fr: "Entre avec respect, liberté et courage…",
    en: "Enter with respect, freedom and courage…",
    it: "Entra con rispetto, libertà e coraggio…"
  },
  pageAButton: {
    fr: "Je suis entré",
    en: "I'm in",
    it: "Sono entrato"
  },
  pageBEnigma: {
    fr: "Bienvenue dans la “Città dell'altra economia” ou cité de l'économie alternative etc... énigme à trouver. Combien de crochets apperçois-tu ? Pour l'instant la bonne réponse est 0.",
    en: "Welcome to the “Città dell'altra economia”, the city of alternative economy… and more. A little riddle awaits you: how many hooks can you spot? For now, the correct answer is zero.",
    it: "Benvenuto nella “Città dell’Altra Economia”, la città dell’economia alternativa… e non solo. Un’indagine ti aspetta: quanti ganci riesci a vedere? Per ora, la risposta giusta è zero."
  },
  pageCEnigma: {
    fr: "Traverse le passage sous le bovin et continue ton chemin le long des amphores. Après l'invasion américaine, tourne à gauche.",
    en: "Walk through the passage under the bovine and continue along the amphorae. After the American invasion, turn left.",
    it: "Attraversa il passaggio sotto il bovino e prosegui lungo le anfore. Dopo l’invasione americana, gira a sinistra."
  },
  pageCButton: {
    fr: "J'ai tourné",
    en: "I turned",
    it: "Ho girato"
  },
  pageDEnigma: {
    fr: "Sur le mur d'en face, celle qui a éduqué les fondateurs de la ville éternelle.",
    en: "On the wall opposite, the one who raised the founders of the Eternal City.",
    it: "Sul muro di fronte, quella che ha educato i fondatori della Città Eterna."
  },
  pageDAnswer: {
    fr: "louve",
    en: "walf",
    it: "lupa"
  },
  pageEEnigma: {
    fr: "Tu es juste à côté du marché de Testaccio ! N'hésite pas y faire une petite pause gourmande et reviens à ta position. <br> Tourne le dos aux amphores et avance, Nord toute, jusqu'à atteindre les confins du territoire.",
    en: "You're right next to the Testaccio market! Don’t hesitate to take a tasty little break, then return to your position. <br> Turn your back to the amphorae and head north, straight ahead, until you reach the edge of the territory.",
    it: "Sei proprio accanto al mercato di Testaccio! Non esitare a fare una piccola pausa golosa e poi torna alla tua posizione. <br> Gira le spalle alle anfore e vai avanti, a nord, fino a raggiungere i confini del territorio."
  },
  pageEButton: {
    fr: "Je suis au bord",
    en: "I'm at the edge",
    it: "Sono al bordo"
  },
  pageFEnigma: {
    fr: "On se trouve sur le Lungotevere qui borde le Tibre et délimite le quartier de Testaccio à l'Ouest et au Nord. <br> Suis le cours d'eau en direction des drapeaux et avance jusqu'à la via... charade à ajouter. Pour l'instant la réponse est “charade”.",
    en: "We are on the Lungotevere, which runs along the Tiber and marks the western and northern boundaries of the Testaccio district. <br> Follow the waterway towards the flags and continue until you reach via... (charade to be added). For now, the answer is “charade.”",
    it: "Siamo sul Lungotevere, che costeggia il Tevere e delimita il quartiere Testaccio a ovest e a nord. <br> Segui il corso d’acqua verso le bandiere e prosegui fino a via... (charade da aggiungere). Per ora la risposta è “charade”."
  },
  pageGEnigma: {
    fr: "Emprunte cette rue vers le Porticus Aemilia. Combien de clous pour le maintenir debout ? Pour l'instant la bonne réponse est 0.",
    en: "Take this street towards the Porticus Aemilia. How many nails does it take to keep it standing? For now, the correct answer is 0.",
    it: "Prendi questa strada verso il Porticus Aemilia. Quanti chiodi servono per mantenerlo in piedi? Per ora la risposta corretta è 0."
  },
  pageHEnding: {
    fr: "Bravo ! Tu es arrivé à la fin de cette aventure secrète. Tu peux maintenant rejoindre la piazza di Santa Maria Liberatrice où t'attend la fin de la balade.",
    en: "Well done! You’ve reached the end of this secret adventure. You can now head to Piazza di Santa Maria Liberatrice, where the end of the walk awaits you.",
    it: "Bravo! Sei arrivato alla fine di questa avventura segreta. Ora puoi raggiungere la piazza di Santa Maria Liberatrice, dove ti aspetta la conclusione del percorso."
  }
};